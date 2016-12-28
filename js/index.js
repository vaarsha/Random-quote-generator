function getquote() {
  
    var quotes = [
    {
      content: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", 
      author: "Gautama Buddha"
    }, {
      content: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      author: "Helen Keller"
    }, {
      content: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci"
    }, {
      content: "You can't cross the sea merely by standing and staring at the water.",
      author: "Rabindranath Tagore"
    }, {
      content: "There is nothing either good or bad, but thinking makes it so.",
      author: "William Shakespeare"
    }, {
      content: "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
      author: "Mark Twain"
    }, {
      content: "Everything has its beauty, but not everyone sees it.",
      author: "Confucius"
    }, {
      content: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle"
    }, {
      content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    }, {
      content: "Intelligence is the ability to adapt to change.",
      author: "Stephen Hawking"
    }, {
      content: "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.",
      author: "Alan Turing"
    }, {
      content: "When an idea exclusively occupies the mind, it is transformed into an actual physical or mental state.",
      author: "Swami Vivekananda"
    }
  ];
  var random = Math.floor(Math.random() * (quotes.length));
  document.getElementById("qt").innerHTML = quotes[random].content;
  document.getElementById("qa").innerHTML = quotes[random].author;
}

