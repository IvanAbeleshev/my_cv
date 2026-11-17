'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendTelegramMessage } from '../actions/sendTelegramMessage';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff003c', '#ff3363', '#ffffff', '#ff99aa'],
      });
    } catch (err) {
      // Graceful fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const result = await sendTelegramMessage({
        name,
        email,
        subject,
        message,
      });

      if (result.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        triggerConfetti();
      } else {
        setError(result.error || 'Failed to send message. Please try again or reach out on Telegram.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please contact directly on Telegram: @IvanAbeleshev');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cyber-card rounded-2xl p-6 sm:p-8 relative">
      <div className="mb-6">
        <h3 className="font-orbitron text-xl font-bold text-white mb-1">
          Send a Message
        </h3>
        <p className="text-xs text-gray-400 font-light">
          Fill out this form and your inquiry will be delivered directly to my Telegram.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
            Your Name <span className="text-neon-red">*</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-neon-red focus:shadow-[0_0_15px_rgba(255,0,60,0.3)] focus:outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
            Your Email <span className="text-neon-red">*</span>
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-neon-red focus:shadow-[0_0_15px_rgba(255,0,60,0.3)] focus:outline-none transition-all"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
            Subject
          </label>
          <input
            type="text"
            placeholder="Project Discussion / Full-Stack Role"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-neon-red focus:shadow-[0_0_15px_rgba(255,0,60,0.3)] focus:outline-none transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
            Message <span className="text-neon-red">*</span>
          </label>
          <textarea
            placeholder="Tell me about your project, timeline, or engineering challenge..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-neon-red focus:shadow-[0_0_15px_rgba(255,0,60,0.3)] focus:outline-none transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-neon-primary w-full py-3.5 text-sm ${
            isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting via Telegram...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Success Alert */}
        {success && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-gray-200">
              <span className="font-semibold text-emerald-400 block mb-0.5">
                Message delivered successfully!
              </span>
              Thank you for reaching out. I will respond to your inquiry shortly.
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="p-4 rounded-xl bg-neon-red/10 border border-neon-red/30 flex items-start gap-3 animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-neon-red shrink-0 mt-0.5" />
            <div className="text-xs text-gray-200">
              <span className="font-semibold text-neon-red block mb-0.5">
                Delivery Error
              </span>
              {error}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
