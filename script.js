document.addEventListener("DOMContentLoaded", function() {
    var inputLine = document.getElementById("input-line");
    var terminalContent = document.getElementById("terminal-content");
  
    // Fokuser input-linjen, når DOM'en er blevet fuldt indlæst
    inputLine.focus();
  
    // Lyt efter tastaturhændelser på input-linjen
    inputLine.addEventListener("keydown", function(event) {
      // Hvis Enter-tasten trykkes
      if (event.key === "Enter") {
        // Få teksten fra input-linjen
        var inputText = inputLine.textContent.trim();
        // Ryd input-linjen
        inputLine.textContent = "";
        // Forhindre standard opførsel af Enter-tasten
        event.preventDefault();
        
        // Anvend en timeout til at indsætte tekst efter en forsinkelse
        setTimeout(function() {
          // Tilføj det, der er skrevet, til terminal-indholdet med fade-in-animation
          var newContent = "<div class='fade-in-text'>root@xkow.xyz:~# " + inputText + "</div>";
          terminalContent.innerHTML += newContent;
        }, 300); // 300 millisekunders forsinkelse
      }
    });
  
    // Lyt efter tastaturhændelser på dokumentniveauet
    document.addEventListener("keydown", function(event) {
      // Fokusér input-linjen når der trykkes på en tast
      inputLine.focus();
    });
  });
