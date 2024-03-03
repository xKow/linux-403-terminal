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
        // Tilføj det, der er skrevet, til terminal-indholdet med "root@xkow.xyz"
        terminalContent.innerHTML += "<div style='color: green;'>root@xkow.xyz: " + inputText + "</div>";
        // Ryd input-linjen
        inputLine.textContent = "";
        // Forhindre standard opførsel af Enter-tasten
        event.preventDefault();
      }
    });
  
    // Lyt efter tastaturhændelser på dokumentniveauet
    document.addEventListener("keydown", function(event) {
      // Fokusér input-linjen når der trykkes på en tast
      inputLine.focus();
    });
  });
  