async function getAITravelRecommendation() {
    const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
        method: "POST",
        headers: { "Authorization": "Bearer YOUR_API_KEY" },
        body: JSON.stringify({ inputs: "Suggest a travel destination for someone who loves beaches and history" })
    });
    const data = await response.json();
    return data[0].generated_text;
}