import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Paragraph({ value }: { value: string }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <motion.p
      className="text-[50px] max-w-[1280px] p-[40px]"
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
}
