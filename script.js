document.addEventListener("DOMContentLoaded", function() {
    var inputLine = document.getElementById("input-line");
    var terminalContent = document.getElementById("terminal-content");
    var maxLines = 13; // Antal linjer, terminalen skal indeholde

    // Funktion til at tilføje ny tekst til terminalen med fade-in-animation
    function addTextToTerminal(text) {
        var newContent = "<div style='animation: fadeIn 0.5s ease forwards;'>root@xkow.xyz:~# " + text + "</div>";
        terminalContent.insertAdjacentHTML('beforeend', newContent);

        // Fjern den ældste tekst, hvis terminalen er blevet for lang
        while (terminalContent.children.length > maxLines) {
            terminalContent.removeChild(terminalContent.children[0]);
        }
    }
  
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
        
        // Tilføj den indtastede tekst til terminalen
        addTextToTerminal(inputText);
      }
    });
  
    // Lyt efter tastaturhændelser på dokumentniveauet
    document.addEventListener("keydown", function(event) {
      // Fokusér input-linjen når der trykkes på en tast
      inputLine.focus();
    });
});
