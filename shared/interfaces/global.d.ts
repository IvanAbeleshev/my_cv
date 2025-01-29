import TelegramBot from 'node-telegram-bot-api';

declare global {
  var botInstance: TelegramBot | undefined;
}