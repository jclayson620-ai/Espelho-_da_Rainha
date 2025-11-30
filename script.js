function openSection(id) {
    document.querySelectorAll(".feature").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function getBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
}

function analyzeMakeup() {
    const file = document.getElementById("makeupImg").files[0];
    if (!file) return alert("Escolha uma imagem");

    getBase64(file, async (base64) => {
        document.getElementById("makeupResult").innerText = "A processar...";
        const text = await analyzeMakeupAPI(base64);
        document.getElementById("makeupResult").innerText = text;
    });
}

function analyzeSkin() {
    const file = document.getElementById("skinImg").files[0];
    if (!file) return alert("Escolha uma imagem");

    getBase64(file, async (base64) => {
        document.getElementById("skinResult").innerText = "A processar...";
        const text = await analyzeSkinAPI(base64);
        document.getElementById("skinResult").innerText = text;
    });
}

function analyzeOutfit() {
    const file = document.getElementById("outfitImg").files[0];
    if (!file) return alert("Escolha uma imagem");

    getBase64(file, async (base64) => {
        document.getElementById("outfitResult").innerText = "A processar...";
        const text = await analyzeOutfitAPI(base64);
        document.getElementById("outfitResult").innerText = text;
    });
}

async function sendChat() {
    const text = document.getElementById("chatInput").value;
    if (!text) return;

    document.getElementById("chatResponse").innerText = "A pensar...";
    const response = await chatAPI(text);
    document.getElementById("chatResponse").innerText = response;
            }
