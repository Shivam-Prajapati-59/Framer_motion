import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Word({ value }: { value: string }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end start"],
  });

  const words = value.split(" ");

  return (
    <p
      className="text-[50px] max-w-[1280px] p-[40px] flex flex-wrap"
      ref={element}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        console.log([start, end]);

        return (
          <WordSpan
            word={word}
            index={index}
            key={index}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}
const WordSpan = ({
  word,
  range,
  progress,
}: {
  word: string;
  index: number;
  range: [number, number];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block mr-2">
      <span className="opacity-10">{word}</span>
      <motion.span className="absolute top-0 left-0" style={{ opacity }}>
        {word}
      </motion.span>
    </span>
  );
};
