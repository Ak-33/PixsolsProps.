// bandit.js

document.addEventListener("DOMContentLoaded", function() {
  var sentences = [
    " ..and so he left, with new orders and new questions.",
    "..and so he vanished, another number among the missing."
  ];
  
  var randomIndex = Math.floor(Math.random() * 2);
  var randomSentence = sentences[randomIndex];
  
  document.getElementById("random-sentence").textContent = randomSentence;
});
