const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Simple bot responses — you can change these later
function generateBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hey love, I'm here. What’s on your heart today?";
    }

    if (message.includes("breakup")) {
        return "Breakups with a child's father hit deep. Tell me what you're struggling with right now.";
    }

    if (message.includes("hurt")) {
        return "It's okay to acknowledge your pain. Healing starts with honesty.";
    }

    return "I hear you. Tell me a little more so I can support you.";
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
    const userText = input.value.trim();
    if (userText === "") return;

    addMessage(userText, "user");
    input.value = "";

    setTimeout(() => {
        const botReply = generateBotReply(userText);
        addMessage(botReply, "bot");
    }, 600);
});
