/*
document.addEventListener('DOMContentLoaded', function() {
    const socket = io();

    // Get elements
    const chatMessages = document.getElementById('chat-messages');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');

    // Handle form submission
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (message !== '') {
            sendMessage(message);
            messageInput.value = '';
        }
    });

    // Handle incoming messages
    socket.on('message', function(data) {
        const sessionID = data['session_id'];
        const message = data['message'];
        displayMessage(sessionID, message);
    });

    // Function to send a message
    function sendMessage(message) {
        const sessionID = document.getElementById('session-id').value;
        displayMessage('You', message);
        socket.emit('message', { session_id: sessionID, message: message });
    }

    // Function to display a message in the chat
    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
*/
