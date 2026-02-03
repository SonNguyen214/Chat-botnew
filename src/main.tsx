import ReactDOM from "react-dom/client";
import ChatbotBubble from "./components/ChatbotBubble";
import type { ChatbotConfig } from "./types";
import ChatbotPopup from "./components/ChatBotPopup";
import { isHideBot } from "./constant";

export function init(config: ChatbotConfig) {
  if (isHideBot(config)) return;
  const container = document.createElement("div");
  container.id = "chatbot-widget-root";
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(<ChatbotBubble config={config} />);
}

export function initPopup(config: ChatbotConfig) {
  if (isHideBot(config)) return;
  const container = document.createElement("div");
  container.id = "chatbot-widget-root";
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(<ChatbotPopup config={config} />);
}

// gắn ra window cho CDN ESM/iife
declare global {
  interface Window {
    Chatbot: {
      init: (config: ChatbotConfig) => void;
      initPopup: (config: ChatbotConfig) => void;
    };
  }
}
window.Chatbot = { init, initPopup };
