// script.js
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});



// Chatbox Functionality
const chatboxContainer = document.getElementById('chatbox-container');
const chatboxToggle = document.getElementById('chatbox-toggle');
const closeChatbox = document.getElementById('close-chatbox');
const sendButton = document.getElementById('send-button');
const chatInput = document.getElementById('chat-input');
const chatboxBody = document.getElementById('chatbox-body');

// Toggle Chatbox
chatboxToggle.addEventListener('click', () => {
    chatboxContainer.style.display = 'flex';
    chatboxToggle.style.display = 'none';
});

// Close Chatbox
closeChatbox.addEventListener('click', () => {
    chatboxContainer.style.display = 'none';
    chatboxToggle.style.display = 'block';
});

// Send Message
sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user-message');
        messageElement.textContent = userMessage;
        chatboxBody.appendChild(messageElement);

        // Auto-Reply
        const botReply = document.createElement('div');
        botReply.classList.add('chat-message', 'bot-message');
        botReply.textContent = "Thanks for your message! I'll get back to you shortly.";
        chatboxBody.appendChild(botReply);

        chatInput.value = '';
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }
});

 //Handle form submission
        document.getElementById('contactForm').addEventListener('submit', async function (e) {
            e.preventDefault(); // Prevent the form from submitting normally

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const formData = {
                name: name,
                email: email,
                message: message
            };

            try {
                const response = await fetch('http://localhost:5000/send-email', { // Your backend endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData), // Sending form data as JSON
                });

                if (response.ok) {
                    alert('Message sent successfully!');
                    document.getElementById('contactForm').reset(); // Reset the form after submission
                } else {
                    alert('Failed to send message.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            }
        });