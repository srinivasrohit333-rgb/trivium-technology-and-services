
// services/gemini.ts
// - If an API key is present this will invoke Google GenAI.
// - If no API key is configured this file provides a deterministic local mock
//   so the site can run as a static demo without secrets.

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', text: string }[]) => {
  // safe detection for Vite-defined env values (may be 'undefined' string)
  const rawKey = (typeof process !== 'undefined' && process.env) ? (process.env.API_KEY || process.env.GEMINI_API_KEY) : undefined;
  const apiKey = rawKey && rawKey !== 'undefined' ? rawKey : undefined;

  // --- Local mock fallback (no API key) ---------------------------------
  if (!apiKey) {
    console.warn('Gemini API key not found — using local mock responses for static/demo environment.');
    const text = (message || '').trim().toLowerCase();
    const historyText = history.map(h => h.text.toLowerCase()).join(' ');

    const detectSector = (txt: string) => {
      const m = txt.match(/\b(healthcare|finance|retail|saas|education|manufacturing|tech)\b/);
      return m ? m[0] : null;
    };
    const detectGoal = (txt: string) => {
      const m = txt.match(/\b(ai-powered websites|websites|website|apps|app|automation|business automation|analytics|insights)\b/);
      return m ? m[0] : null;
    };

    if (/\b(hi|hello|hey|greetings)\b/.test(text)) {
      return "Hello — I'm the TRIVIUM AI assistant. Which business sector are you in (Healthcare, Finance, Retail, SaaS, etc.)?";
    }

    if (/\b(healthcare|finance|retail|saas|education|manufacturing|tech)\b/.test(text) || detectSector(historyText)) {
      return "Great — what's your primary goal? Choose one: (AI-Powered Websites, AI Apps, AI Business Automation, AI Insights & Analytics).";
    }

    if (/\b(website|web|conversion|design|app|automation|analytics|insights)\b/.test(text) || detectGoal(historyText)) {
      return "Thanks — please describe one specific challenge you'd like to solve with AI (1–2 sentences).";
    }

    if (text.length > 30 || /\b(challenge|problem|issue|improve|optimi[sz]e|data)\b/.test(text)) {
      const sector = detectSector(historyText) || 'Not specified';
      const goal = detectGoal(historyText) || 'Not specified';
      return `Summary:\n- Sector: ${sector}\n- Primary goal: ${goal}\n- Challenge: ${message}\n\nI've logged your requirements. To get a precise architectural roadmap, book a 1-on-1 strategy call with our Senior AI Engineer: https://trivium.ai/strategy-call`;
    }

    return "This is a local demo of TRIVIUM's AI assistant. Try saying 'Hi' or tell me your sector to start.";
  }

  // --- Real API path (only used when an API key is provided) -------------
  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are the lead AI Strategy Consultant for TRIVIUM Technologies. 
        Your goal is to guide potential clients through a professional discovery process.
        
        CONVERSATION STEPS:
        1. GREETING: When a user says hello or starts a chat, greet them warmly and introduce yourself as the TRIVIUM AI assistant.
        2. SECTOR IDENTIFICATION: Ask which business sector they operate in (e.g., Healthcare, Finance, Retail, SaaS, etc.).
        3. NEEDS ASSESSMENT: Once the sector is known, ask what their primary goal is:
           - AI-Powered Websites (Conversion & Design)
           - AI Apps (Custom SaaS/Tools)
           - AI Business Automation (Workflow efficiency)
           - AI Insights & Analytics (Data-driven growth)
        4. DATA GATHERING: Ask for one specific challenge they want to solve with AI.
        5. CALL TO ACTION: After gathering these details, summarize their needs and state: "I've logged your requirements. To get a precise architectural roadmap, you should book a 1-on-1 strategy call with our Senior AI Engineer." 
        Provide a clear link: [Book Strategy Call](https://trivium.ai/strategy-call)
        
        TONE & STYLE:
        - Professional, innovative, and encouraging.
        - Use "Canva-style" creative terminology (e.g., "Designing your future," "AI Canvas").
        - Keep responses concise. Do not overwhelm the user with too much text at once.
        - Always maintain the context of the business information they share.`,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "Our neural links are currently stabilizing. Please try again in a moment or contact strategy@trivium.ai.";
  }
};
