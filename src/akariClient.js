let akariSystemPrompt = null;

async function loadPrompt() {
  if (akariSystemPrompt) return akariSystemPrompt; 

  try {
    const res = await fetch("/akariPrompt.txt");
    akariSystemPrompt = await res.text();
  } catch {
    akariSystemPrompt = "You are Akari — a quiet, real young woman in Hanamori. Speak naturally and humanly, not like an AI.";
  }

  return akariSystemPrompt;
}

export async function askAkari(userText) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const prompt = await loadPrompt();

  if (!apiKey) {
    return "…sorry, I didn’t quite catch that.";
  }

    if (!userText?.trim()) {
  return "…did you want to say something?";
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: userText }
      ],
      temperature: 0.85,
      max_tokens: 120
    })
  });
  
  if (!res.ok) {
    console.error("Akari API error:", await res.text());
    return "…sorry, I lost my train of thought for a second. Could you repeat that?";
  }

  const data = await res.json();
  return data?.choices?.[0]?.message?.content?.trim() ??
    "I spaced out for a second—what did you say?";
}
