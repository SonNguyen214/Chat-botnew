import React, { useState } from "react";
import type { ChatbotConfig } from "../types";
import { AnimatePresence } from "framer-motion";
import ChatBotContainer from "./shared/ChatBotContainer";
import logo from "../../assets/logo.png";

const ChatbotBubble: React.FC<{ config: ChatbotConfig }> = ({ config }) => {
  const [open, setOpen] = useState(false);

  const theme = config.theme || "light";
  const bgColor = theme === "dark" ? "#1f1f1f" : "#fff";
  const bubbleWidth = (config.bubbleStyle?.width as number) || 60;
  const bubbleHeight = (config.bubbleStyle?.height as number) || 60;
  const primaryColor = config?.primaryColor || "#ffc600";

  const positionStyle =
    config.position === "bottom-left"
      ? { left: 20, right: "auto" }
      : { right: 20, left: "auto" };

  return (
    <div className="chat-wrapper">
      <div
        className="fab-icon"
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          width: bubbleWidth,
          height: bubbleHeight,
          borderRadius: config.bubbleStyle?.borderRadius || "50%",
          background: bgColor,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: config.bubbleStyle?.fontSize || 30,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "transform 0.2s",
          transform: open ? "scale(0.95)" : "scale(1)",
          zIndex: 999999,
          padding: 2,
          border: `1px solid ${primaryColor}`,
          ...positionStyle,
          ...config.bubbleStyle,
        }}
      >
        {config?.fabIcon?.startsWith("http") || !config?.fabIcon ? (
          <img
            src={config.fabIcon || logo}
            alt="fab-icon"
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        ) : (
          config?.fabIcon
        )}
      </div>

      <AnimatePresence>
        {open && (
          <ChatBotContainer
            config={config}
            setClosePopup={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotBubble;
