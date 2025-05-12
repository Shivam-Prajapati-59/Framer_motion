import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Project {
  index: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card = ({
  index,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: Project) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="relative w-3/4 h-3/5 p-6 rounded-xl shadow-lg text-white flex"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-10% + ${index * 28}px`,
        }}
      >
        {/* Left Side - Text */}
        <div className="w-1/2 pr-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-base mb-6">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline text-lg hover:opacity-80 transition-opacity"
          >
            Visit Project
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex items-center justify-center overflow-hidden rounded-lg">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img src={src} alt={title} className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
