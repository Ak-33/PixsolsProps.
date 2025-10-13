// mercenarys.js

document.addEventListener("DOMContentLoaded", function() {
  var sentences = [
    "..and so he left, with dreams of good food and a peaceful night.",
    "..and so he vanished, reduced to fable."
  ];
  
  var randomIndex = Math.floor(Math.random() * 2);
  var randomSentence = sentences[randomIndex];
  
  document.getElementById("random-sentence").textContent = randomSentence;
});
