// Chatbot Script
const responses = {
    greeting: "Hello! I'm Closeby-AI. How can I assist you today?",
    about: "Closeby-AI provides location and event-based LLM services. Ask me more!",
    help: "I can provide information about our services, demos, and more. Just type your question!",
    fallback: "I'm not sure about that. Please ask something else or email us at info@closeby-ai.com.",
};

// Initialize Chat
function addMessage(sender, text) {
    const messagesDiv = document.getElementById("messages");
    const message = document.createElement("div");
    message.classList.add(sender);
    message.innerText = text;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
}

// Process User Message
function sendMessage() {
    const userMessage = document.getElementById("userMessage").value.trim();
    if (userMessage === "") return;

    addMessage("user", userMessage); // Display user message

    // Simple Bot Logic
    let response;
    if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        response = responses.greeting;
    } else if (userMessage.toLowerCase().includes("about")) {
        response = responses.about;
    } else if (userMessage.toLowerCase().includes("help")) {
        response = responses.help;
    } else {
        response = responses.fallback;
    }

    setTimeout(() => addMessage("bot", response), 500); // Simulate bot response delay
    document.getElementById("userMessage").value = ""; // Clear input field
}
