import { motion } from "framer-motion";

interface IProps {
  textColor: string;
  setShowConfirmReset: (a: boolean) => void;
  primaryColor: string;
  handleClick: () => void;
}

const PopupReset = ({
  textColor,
  setShowConfirmReset,
  handleClick,
}: IProps) => {
  return (
    <motion.div
      style={{
        width: "100%",
        padding: "12px 0",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        color: textColor,
      }}
    >
      <div
        className="overlay"
        onClick={() => setShowConfirmReset(false)}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: "white",
          position: "absolute",
          zIndex: 1,
          textAlign: "center",
          width: "100%",
          bottom: 0,
          paddingBottom: "16px",
        }}
      >
        <div
          className="title"
          style={{
            margin: "16px auto",
            fontSize: "16px",
            color: "#000",
          }}
        >
          Tạo đoạn hội thoại mới?
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <motion.button
            whileHover={{ backgroundColor: "#f7ce3d" }}
            style={{
              height: "40px",
              borderRadius: "8px",
              textAlign: "center",
              width: "80%",
              cursor: "pointer",
              backgroundColor: "#f7e08f",
              fontWeight: 700,
              border: "none",
            }}
            onClick={handleClick}
          >
            Tạo mới
          </motion.button>
          <motion.button
            whileHover={{ background: "#d3d3d3" }}
            style={{
              height: "40px",
              borderRadius: "8px",
              textAlign: "center",
              width: "80%",
              cursor: "pointer",
              border: `1px solid #cbcbcb`,
              fontWeight: 700,
            }}
            onClick={() => setShowConfirmReset(false)}
          >
            Huỷ
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PopupReset;
