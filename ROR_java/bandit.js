// bandit.js

document.addEventListener("DOMContentLoaded", function() {
  var sentences = [
    "..and so he left, grateful for his luck.",
    "..and so he vanished, full of regret."
  ];
  
  var randomIndex = Math.floor(Math.random() * 2);
  var randomSentence = sentences[randomIndex];
  
  document.getElementById("random-sentence").textContent = randomSentence;
});
