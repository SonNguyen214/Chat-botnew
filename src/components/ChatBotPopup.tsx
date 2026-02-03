import React, { useEffect, useState } from "react";
import type { ChatbotConfig } from "../types";
import { AnimatePresence } from "framer-motion";
import ChatBotContainer from "./shared/ChatBotContainer";

const ChatbotPopup: React.FC<{ config: ChatbotConfig }> = ({ config }) => {
  const [open, setOpen] = useState(false);

  const delayTime = config?.autoShowDelay ?? 5000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, delayTime);

    return () => clearTimeout(timeout);
  }, []);

  const popupConfig = {
    ...config,
    chatWindowStyle: {
      position: "absolute",
      bottom: "unset",
      right: "unset",
    },
  };

  return open ? (
    <div
      className="chat-wrapper"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
        onClick={() => setOpen(false)}
      ></div>

      <AnimatePresence>
        <ChatBotContainer
          config={popupConfig}
          setClosePopup={() => setOpen(false)}
        />
      </AnimatePresence>
    </div>
  ) : (
    <></>
  );
};

export default ChatbotPopup;
