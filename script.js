document.addEventListener("DOMContentLoaded", function() {
    var inputLine = document.getElementById("input-line");
    var terminalContent = document.getElementById("terminal-content");
    var maxLines = 17; // Antal linjer, terminalen skal indeholde
    var firstMessageAdded = false; // Flag for at spore, om den første besked er tilføjet

    // Funktion til at tilføje ny tekst til terminalen med fade-in-animation
    function addTextToTerminal(text, color) {
        var newContent;
        if (!firstMessageAdded) { // Hvis det er den første besked
            newContent = "<div style='animation: fadeIn 0.5s ease forwards;'><span style='color: " + color + ";'>root@xkow.xyz:~# " + text + "</span></div>";
            firstMessageAdded = true; // Angiv flag til true, så vi ved, at den første besked er blevet tilføjet
        } else {
            newContent = "<div style='animation: fadeIn 0.5s ease forwards;'>root@xkow.xyz:~# " + text + "</div>"; // Hvis det ikke er den første besked, tilføj uden ekstra stilarter
        }
        terminalContent.insertAdjacentHTML('beforeend', newContent);

        // Fjern den ældste tekst, hvis terminalen er blevet for lang
        while (terminalContent.children.length > maxLines) {
            terminalContent.removeChild(terminalContent.children[0]);
        }
    }

    // Funktion til at håndtere kommandoer
    function handleCommand(inputText) {
        // Håndter "help" kommando
        if (inputText.toLowerCase() === "help") {
            // Tilføj besked med en forsinkelse på 0.2 sekunder
            setTimeout(function() {
                addTextToTerminal("\n\nwelcome to the xkow.xyz command center\n\ncommands:\n  help     shows this menu\n  clear    clears the terminal", "green");
            }, 200); // 200 millisekunders forsinkelse (0.2 sekunder)
            addTextToTerminal(inputText, "white"); // Tilføj besked om hjælp med det samme, men i hvid farve
        } else if (inputText.toLowerCase() === "clear") {
            // Håndter "clear" kommando
            terminalContent.innerHTML = ""; // Tøm indholdet af terminalen
            firstMessageAdded = false; // Nulstil flagget for den første besked
        } else {
            // Hvis det ikke er "help" eller "clear" kommando, tilføj teksten med det samme
            addTextToTerminal(inputText, "white");
        }
    }
  
    // Fokuser input-linjen, når DOM'en er blevet fuldt indlæst
    inputLine.focus();
  
    // Tilføj initialbesked til terminalen ved indlæsningstidspunktet
    addTextToTerminal("Error 403: Type 'help' for more information.", "red");
    

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
        
        // Behandle kommando med forsinkelse på 0.2 sekunder
        handleCommand(inputText);
      }
    });
  
    // Lyt efter tastaturhændelser på dokumentniveauet
    document.addEventListener("keydown", function(event) {
      // Fokusér input-linjen når der trykkes på en tast
      inputLine.focus();
    });
});
