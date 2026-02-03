import type { ChatbotConfig } from "../../types";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";

interface IProps {
  config: ChatbotConfig;
  primaryColor: string;
  setClosePopup: (a: boolean) => void;
  setShowConfirmReset: (a: boolean) => void;
}

const Header = ({
  config,
  setClosePopup,
  primaryColor,
  setShowConfirmReset,
}: IProps) => {
  return (
    <motion.div
      className="chat-header"
      style={{
        background: config.headerStyle?.background || primaryColor,
        color: config.headerStyle?.color || "#333",
        padding: config.headerStyle?.padding || "10px 16px",
        fontSize: config.headerStyle?.fontSize || 16,
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        ...config.headerStyle,
      }}
    >
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          minWidth: "80%",
        }}
      >
        <img
          className="chat-avatar"
          src={config?.botAvatar || logo}
          alt="Bot"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#fff",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: "85%" }}>
          <span>{config?.botName || "MipoBot"}</span>
          {config?.botDescription && (
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                maxWidth: "100%",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {config?.botDescription || "Trợ lý ảo Mipo"}
            </span>
          )}
        </div>
      </motion.div>

      <motion.div
        className="chat-actions"
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <motion.span
          whileHover={{ backgroundColor: "#777373" }}
          className="minimize"
          onClick={() => setClosePopup(false)}
          style={{
            color: config.headerStyle?.color ?? "#333",
            fontSize: "25px",
            fontWeight: 500,
            cursor: "pointer",
            width: 30,
            height: 30,
            borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          –
        </motion.span>
        <motion.span
          whileHover={{ backgroundColor: "#777373" }}
          onClick={() => setShowConfirmReset(true)}
          style={{
            color: config.headerStyle?.color ?? "#333",
            fontSize: "25px",
            fontWeight: 500,
            transform: "rotate(-130deg)",
            cursor: "pointer",
            width: 30,
            height: 30,
            borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          ↺
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Header;
