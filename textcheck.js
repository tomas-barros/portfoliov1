const messageContent = document.getElementById('reason');
const errorBox = document.getElementById('textarea-error');
const sendBtn = document.getElementById('sendBtn');

// intial
errorBox.style.display = 'none';
sendBtn.style.display = 'none';

function drawSendBtn() {
    if (messageContent.value != '') {
        sendBtn.style.display = 'block';
    }
}