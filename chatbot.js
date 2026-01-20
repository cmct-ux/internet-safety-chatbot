const chatBox = document.getElementById("chat-box");

function addMessage(text, className) {
    const msg = document.createElement("div");
    msg.className = className;
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("user-input");
    const userText = input.value.toLowerCase();
    if (userText === "") return;

    addMessage("👧 Bạn: " + input.value, "user");

    let response = getBotResponse(userText);
    addMessage("🤖 Bot: " + response, "bot");

    input.value = "";
}

function getBotResponse(text) {

    if (text.includes("người lạ") || text.includes("xin ảnh")) {
        return "🔴 Nguy hiểm! Không gửi ảnh và hãy nói với bố mẹ hoặc thầy cô ngay.";
    }

    if (text.includes("chửi") || text.includes("xúc phạm")) {
        return "🟡 Hãy chụp lại màn hình, chặn người đó và báo cho người lớn.";
    }

    if (text.includes("link") || text.includes("đường link")) {
        return "🟡 Không nhấn link lạ. Hãy hỏi người lớn trước khi mở.";
    }

    if (text.includes("gặp") || text.includes("ra ngoài")) {
        return "🔴 Tuyệt đối không gặp người quen qua mạng ngoài đời.";
    }

    if (text.includes("an toàn")) {
        return "🟢 Internet an toàn khi con không chia sẻ thông tin cá nhân.";
    }

    return "🟢 Con hãy luôn cẩn thận, không chia sẻ thông tin cá nhân và hỏi người lớn khi nghi ngờ nhé!";
}

// Tin nhắn chào
addMessage("🤖 Bot: Chào con! Con có thể hỏi mình về an toàn Internet nhé 😊", "bot");
