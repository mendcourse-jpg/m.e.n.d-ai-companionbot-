function sendMessage() {
  const input = document.getElementById("userInput").value.toLowerCase().trim();
  const output = document.getElementById("output");

  if (!input) return;

  // Commands
  const commands = {
    "/heal": "Let's take a breath together, sis. Inhale 4… hold 2… exhale 6.\n\nYou are safe. You are seen.",
    "/journal": "Journal Prompt:\n“Where did I show strength today, even in a small way?”",
    "/script": "Healing Script:\n“You are rebuilding with intention. You deserve peace and softness.”",
    "/routine": "Morning: 5-minute breath + 10-minute tidy.\nEvening: 10-minute reset + journal.",
    "/organize": "30/30 Declutter Method: 30 minutes, 30 items sorted.",
    "/momhelp": "Parenting Tip: Name the feeling. Sit with them for 60 seconds.",
    "/business": "Start with a micro-offer. Choose one skill you already have.",
    "/resources": "Tell me your city/state or ZIP so I can look up support near you."
  };

  // If the user uses a command
  if (commands[input]) {
    output.innerText = commands[input];
  } 
  else {
    output.innerText = "I got you, sis. Try one of these:\n/heal\n/journal\n/script\n/routine\n/organize\n/momhelp\n/business\n/resources";
  }
      }
