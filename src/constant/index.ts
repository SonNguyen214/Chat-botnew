import type { ChatbotConfig } from "../types";

export const isHideBot = (config: ChatbotConfig) => {
  return !config.token || !config?.u_id;
};

export const LOCAL_STORAGE_KEY = {
  conversationId: "conversationId",
};
