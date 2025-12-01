const API_KEY = "AIzaSyAoy2uQDHUjVRwPPjeh8umlAdGe4HqBrng";
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${AIzaSyAoy2uQDHUjVRwPPjeh8umlAdGe4HqBrng}`;
async function callGemini(prompt, base64Image = null) {
    const body = {
        contents: [
            {
                parts: base64Image
                    ? [
                        { text: prompt },
                        { inlineData: { data: base64Image, mimeType: "image/jpeg" } }
                    ]
                    : [{ text: prompt }]
            }
        ]
    };

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro ao processar.";
}

async function analyzeMakeupAPI(image) {
    const prompt = "És uma consultora de beleza. Analisa os pontos faciais, cores ideais e cria um guia completo de maquilhagem.";
    return await callGemini(prompt, image);
}

async function analyzeSkinAPI(image) {
    const prompt = "És uma especialista em pele. Analisa textura, oleosidade e dá uma rotina manhã/noite detalhada.";
    return await callGemini(prompt, image);
}

async function analyzeOutfitAPI(image) {
    const prompt = "És uma consultora de estilo real. Avalia o look e sugere estilos para Casual, Trabalho e Gala.";
    return await callGemini(prompt, image);
}

async function chatAPI(text) {
    const prompt = "És uma Consultora Real de Beleza. Responde de forma elegante, sábia e majestosa.";
    return await callGemini(prompt + "\nPergunta: " + text);
          }
