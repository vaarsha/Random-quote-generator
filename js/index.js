function getquote() {
  //document.getElementById("qt").innerHTML = "Berry";
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
    }
  ];
  var random = Math.floor(Math.random() * (quotes.length));
  document.getElementById("qt").innerHTML = quotes[random].content;
  document.getElementById("qa").innerHTML = quotes[random].author;
}

