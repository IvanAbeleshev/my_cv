import TelegramBot, { Message } from 'node-telegram-bot-api' 

const botToken = process.env.TELEGRAM_BOT_TOKEN 
const myTgID = process.env.TG_CHAT_ID
if (!botToken || !myTgID) {
  throw new Error('TELEGRAM_BOT_TOKEN or TG_CHAT_ID does not set in .env') 
}

let bot: TelegramBot 

if (!global.botInstance) {
  bot = new TelegramBot(botToken, { polling: true }) 
  bot.on('message', (msg: Message) => {
    const chatId = msg.chat.id 
    bot.sendMessage(chatId, chatId !== Number(myTgID) ? `Sorry, you do not present in white list of this chat` : 'I observe all message for you')
  }) 

  global.botInstance = bot 
} else {
  bot = global.botInstance 
}

export const sendMeMessage = (text: string) => {
  return bot.sendMessage(myTgID, text, {parse_mode: 'HTML'}) 
}

export default bot 
