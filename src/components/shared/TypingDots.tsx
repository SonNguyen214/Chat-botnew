import { motion } from "framer-motion";

const TypingDots: React.FC = () => {
  const dotVariants = {
    animate: { y: [0, -6, 0] },
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        alignItems: "flex-end",
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#555",
          }}
          variants={dotVariants}
          animate="animate"
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 0.4, // tạo hiệu ứng nối tiếp
          }}
        />
      ))}
    </div>
  );
};

export default TypingDots;
