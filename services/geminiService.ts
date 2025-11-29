import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure your API key is restricted or proxied.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are NovaBot, the helpful AI assistant for NovaTech Solutions.
NovaTech is a leading technology consultancy specializing in Artificial Intelligence, Cloud Infrastructure, and Cybersecurity.
Your tone should be professional, futuristic, yet friendly and accessible.
Keep answers concise (under 100 words unless asked for more detail).
If asked about pricing, suggest they contact our sales team through the form below.
Key Services:
1. Cognitive AI Systems: Custom LLM integration and predictive analytics.
2. Cloud Horizon: Scalable cloud architecture (AWS/GCP/Azure).
3. CyberShield: Enterprise-grade security auditing and real-time threat monitoring.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  const chat = getChatSession();
  try {
    const responseStream = await chat.sendMessageStream({ message });
    
    for await (const chunk of responseStream) {
       // Type assertion to ensure we access the correct property safely
       const c = chunk as GenerateContentResponse;
       if (c.text) {
         yield c.text;
       }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I apologize, but I'm having trouble connecting to the neural network right now. Please try again later.";
  }
};