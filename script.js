const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Dream big and dare to fail. - Norman Vaughan",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Your time is limited, so don't waste it living someone else's life. -Steve Job",
];

const randomBtn = document.querySelector('.btn-random');
const quote = document.querySelector('.quote');

randomBtn.onclick = function () {
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random];
};
