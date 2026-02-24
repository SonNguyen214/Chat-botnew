import { useEffect, useRef, useState } from "react";
import type { ChatbotConfig, Message } from "../../types";
import { motion } from "framer-motion";
import PopupReset from "./PopupReset";
import Footer from "./Footer";
import Messages from "./Messages";
import Header from "./Header";
import { formatDate } from "../../utils";
import dayjs from "dayjs";

interface IProps {
  config: ChatbotConfig;
  setClosePopup: (a: boolean) => void;
}

export const ChatBotContainer = ({ config, setClosePopup }: IProps) => {
  const initMessage: Message = {
    from: "bot",
    text: config?.greeting || "Xin chào 🖐",
    timeStamp: formatDate(dayjs()),
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([initMessage]);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const theme = config.theme || "light";
  const description = config.botDescription || "Chào mừng bạn đến với MiPo!";
  const bgColor = theme === "dark" ? "#1f1f1f" : "#fff";
  const textColor = theme === "dark" ? "#eee" : "#000";
  const primaryColor = config?.primaryColor || "#ffc600";
  const bubbleHeight = (config.bubbleStyle?.height as number) || 60;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const positionStyle =
    config.position === "bottom-left"
      ? { left: 20, right: "auto" }
      : { right: 20, left: "auto" };

  return (
    <motion.div
      className="chat-window"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        bottom: bubbleHeight + 10,
        width: config?.width || 400,
        height: config?.height || 600,
        background: config?.background || bgColor,
        color: config?.color ?? textColor,
        borderRadius: config?.borderRadius || 8,
        boxShadow: `0 0px 2px ${config?.primaryColor}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: config?.fontFamily || "'Inter', sans-serif",
        zIndex: 999999,
        border: "1px solid #e3e3e3",
        lineHeight: 1.45,
        letterSpacing: "0.25px",
        wordSpacing: "1.2px",
        ...positionStyle,
      }}
    >
      {/* Header */}
      <Header
        config={config}
        primaryColor={primaryColor}
        description={description}
        setClosePopup={setClosePopup}
        setShowConfirmReset={setShowConfirmReset}
      />
      {/* Messages */}
      <Messages
        config={config}
        messages={messages}
        textColor={textColor}
        description={description}
        messagesEndRef={messagesEndRef}
      />

      {/* Footer input + button */}
      <Footer
        primaryColor={primaryColor}
        setMessages={setMessages}
        messages={messages}
        config={config}
      />

      {/* Popup reset  */}
      {showConfirmReset && (
        <PopupReset
          primaryColor={primaryColor}
          setShowConfirmReset={setShowConfirmReset}
          textColor={textColor}
          handleClick={() => {
            setMessages([initMessage]);
            setShowConfirmReset(false);
          }}
        />
      )}
    </motion.div>
  );
};

export default ChatBotContainer;
