'use server';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Server action to send a contact message to Telegram
 */
export async function sendTelegramMessage({
  name,
  email,
  subject,
  message,
}: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject?.trim() || 'No Subject';
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return {
        success: false,
        error: 'Please fill in all required fields (Name, Email, Message).',
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return {
        success: false,
        error: 'Please provide a valid email address.',
      };
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TG_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn('Telegram credentials are not configured in environment variables');
      return {
        success: false,
        error: 'Delivery server is currently unavailable. Please reach out directly on Telegram: @IvanAbeleshev.',
      };
    }

    const text = `
<b>⚡ New Message from Portfolio Website</b>
━━━━━━━━━━━━━━━━━━━━
<b>👤 Name:</b> ${escapeHtml(trimmedName)}
<b>📧 Email:</b> <code>${escapeHtml(trimmedEmail)}</code>
<b>📌 Subject:</b> ${escapeHtml(trimmedSubject)}
<b>💬 Message:</b>
${escapeHtml(trimmedMessage)}
━━━━━━━━━━━━━━━━━━━━
<b>📅 Date:</b> ${new Date().toUTCString()}
`;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Failed to send Telegram message:', responseData);
      return {
        success: false,
        error: 'Unable to deliver message. Please reach out directly on Telegram: @IvanAbeleshev',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please contact directly on Telegram: @IvanAbeleshev',
    };
  }
}
