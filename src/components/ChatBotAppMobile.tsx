import React, { useEffect, useState } from "react";
import type { ChatbotConfig } from "../types";
import { AnimatePresence } from "framer-motion";
import ChatBotContainer from "./shared/ChatBotContainer";

const ChatbotAppMobile: React.FC<{ config: ChatbotConfig }> = ({ config }) => {
  const [open, setOpen] = useState(false);

  const delayTime = config?.autoShowDelay ?? 5000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, delayTime);

    return () => clearTimeout(timeout);
  }, []);

  const popupConfig = {
    chatWindowStyle: {
      position: "unset",
      bottom: "unset",
      right: "unset",
      width: "auto",
      height: "auto"
    },
    ...config,
  };

  return open ? (
      <AnimatePresence>
        <ChatBotContainer
          config={popupConfig}
          setClosePopup={() => setOpen(false)}
        />
      </AnimatePresence>
  ) : (
    <></>
  );
};

export default ChatbotAppMobile;
