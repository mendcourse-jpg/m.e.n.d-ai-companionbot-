
const API_KEY = "354c0d86744049f8a68a076cff259533";

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    addMessage("You", userInput);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || "Error";

    addMessage("Bot", botReply);
}

function addMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    const message = document.createElement("div");
    message.className = sender === "You" ? "user-message" : "bot-message";
    message.textContent = `${sender}: ${text}`;
    chatBox.appendChild(message);
        }
