import ReactDOM from "react-dom/client";
import ChatbotBubble from "./components/ChatbotBubble";
import type { ChatbotConfig } from "./types";
import ChatbotAppMobile from "./components/ChatBotAppMobile";
import { isHideBot } from "./constant";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export function init(config: ChatbotConfig) {
  if (isHideBot(config)) return;
  const container = document.createElement("div");
  container.id = "chatbot-widget-root";
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <Provider store={store}>
      <ChatbotBubble config={config} />
    </Provider>,
  );
}

export function initChatMobile(config: ChatbotConfig) {
  if (isHideBot(config)) return;
  const container = document.createElement("div");
  container.id = "chatbot-widget-root";
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <Provider store={store}>
      <ChatbotAppMobile config={config} />
    </Provider>,
  );
}

// gắn ra window cho CDN ESM/iife
declare global {
  interface Window {
    Chatbot: {
      init: (config: ChatbotConfig) => void;
      initChatMobile: (config: ChatbotConfig) => void;
    };
  }
}
window.Chatbot = { init, initChatMobile };
