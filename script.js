document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, 'user');
        input.value = '';
        
        // Simulate AI response after a delay
        setTimeout(() => {
            const responses = [
                "I understand what you're asking.",
                "That's an interesting question!",
                "Let me think about that...",
                "Here's what I found:",
                "I can help with that!"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'ai');
        }, 1000);
    }
});

function addMessage(text, sender) {
    const chatContainer = document.querySelector('.chat-container');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'max-w-3xl', 'mx-auto', 'p-4', 'rounded-lg');
    
    if (sender === 'user') {
        messageDiv.classList.add('user-message');
        messageDiv.innerHTML = `<div class="flex justify-end">${text}</div>`;
    } else {
        messageDiv.classList.add('ai-message');
        messageDiv.innerHTML = `<div class="flex items-start space-x-2">
            <i class="fas fa-robot text-blue-500 mt-1"></i>
            <div>${text}</div>
        </div>`;
    }
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}