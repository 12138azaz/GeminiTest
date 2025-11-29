import { GoogleGenAI } from "@google/genai";

// 1. 修改点：初始化 AI 客户端
// 必须改成 import.meta.env.VITE_API_KEY 浏览器才能读到钥匙
const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_API_KEY 
});

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

// 定义 Chat 类型（为了防止 TypeScript 报错，给个 any 备用）
let chatSession: any | null = null;

export const getChatSession = () => {
  if (!chatSession) {
    // 2. 修改点：使用稳定版模型 gemini-1.5-flash
    // gemini-2.5-flash 现在还处于 API 白名单测试阶段，大概率会报 404 或 429 错误
    // 1.5-flash 额度大，回复快，足够在这个 Demo 里用了
    chatSession = ai.chats.create({
      model: 'gemini-1.5-flash',
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
       // 直接获取文本，简单粗暴
       const text = chunk.text; 
       if (text) {
         yield text;
       }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I apologize, but I'm having trouble connecting to the neural network right now. Please try again later.";
  }
};