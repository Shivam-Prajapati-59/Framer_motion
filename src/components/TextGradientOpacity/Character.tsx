import { useScroll, useTransform, motion, easeInOut } from "framer-motion";
import { useRef } from "react";

export default function Word({ value }: { value: string }) {
  const element = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end start"],
  });

  const words = value.split(" ");

  return (
    <p
      className="text-4xl md:text-5xl lg:text-6xl max-w-7xl mx-auto p-8 md:p-10 flex flex-wrap font-medium leading-relaxed"
      ref={element}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <WordSpan
            word={word}
            key={index}
            range={[start, end]}
            progress={scrollYProgress}
            isLastWord={index === words.length - 1}
          />
        );
      })}
    </p>
  );
}

interface WordSpanProps {
  word: string;
  range: [number, number];
  progress: any;
  isLastWord: boolean;
}

const WordSpan = ({ word, range, progress, isLastWord }: WordSpanProps) => {
  const characters = word.split("");

  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className={`relative inline-block ${isLastWord ? "" : "mr-3"}`}>
      {characters.map((character: string, i: number) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);

        return (
          <Character
            character={character}
            key={i}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

interface CharacterProps {
  character: string;
  range: [number, number];
  progress: any;
}

const Character = ({ character, range, progress }: CharacterProps) => {
  // Create a smoother transition with easing
  const opacity = useTransform(
    progress,
    range,
    [0, 1],
    { ease: easeInOut } // Use imported easing function
  );

  return (
    <span className="relative inline-block">
      <span className="opacity-10">{character}</span>
      <motion.span
        className="absolute top-0 left-0 text-indigo-600 dark:text-indigo-400"
        style={{ opacity }}
      >
        {character}
      </motion.span>
    </span>
  );
};
