// QUICK TEST VERSION — API key will be public. Use only for testing.
const API_KEY = "ab803d1e42d747b2986da4df76d9f9d9"; // <-- replace with your new key

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    addMessage("You", userInput);
    document.getElementById("user-input").value = "";

    try {
        const resp = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                input: userInput
            })
        });

        const data = await resp.json();

        // Best-effort parsing for the /v1/responses shape:
        const botReply =
            data.output_text || // simple field sometimes present
            (data.output && data.output[0] && data.output[0].content && data.output[0].content[0] && (data.output[0].content[0].text || data.output[0].content[0].text)) ||
            (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) ||
            "Sorry — I didn't get an answer.";

        addMessage("Bot", botReply);
    } catch (err) {
        console.error("Fetch error:", err);
        addMessage("Bot", "Error connecting to AI. (See console)");
    }
}

function addMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    const message = document.createElement("div");
    message.className = sender === "You" ? "user-message" : "bot-message";
    message.textContent = `${sender}: ${text}`;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}
