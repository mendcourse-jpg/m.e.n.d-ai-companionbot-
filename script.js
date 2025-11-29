const apiKey = process.env.OPENAI_API_KEY;

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    addMessage("You", userInput);
    document.getElementById("user-input").value = "";

    try {
        const response = await fetch("https://api.openai.com/v1/responses", {
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

        const data = await response.json();

        const botReply =
            data.output_text ||
            data.output_text?.[0] ||
            data.choices?.[0]?.message?.content ||
            "Error: No response text.";

        addMessage("Bot", botReply);

    } catch (error) {
        addMessage("Bot", "Error connecting to the AI.");
    }
}

function addMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    const message = document.createElement("div");
    message.className = sender === "You" ? "user-message" : "bot-message";
    message.textContent = `${sender}: ${text}`;
    chatBox.appendChild(message);
                            
