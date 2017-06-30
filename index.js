const TeleBot = require('telebot');
const bot = new TeleBot('398051313:AAEnc6LC_yYw2Zq_8kMnH8q3vgAhz-aWeJw');

const owner = '-1001057296809';
//const owner = '2632341';

bot.on('*', msg => {
  if(msg.text !== '/start') {
    bot.forwardMessage(owner, msg.from.id, msg.message_id);
    bot.sendMessage(msg.chat.id, 'Ваш звонок очень важен для нас! Правда 🐱 Тебе напишет кто-нибудь из нас: Аня, Катя, Ксюша или Лёша ');
  }
  return;
});

bot.on(['/start'], msg => {
  return bot.sendMessage(msg.chat.id, 'Привет! Пиши сюда все вопросы, связанные с дизайном. Мы получим сообщение в чятик и кто-нибудь из нас тебе ответит 🦄');
});

bot.start();
