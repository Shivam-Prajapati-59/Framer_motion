import { useEffect, useRef } from "react";
import { projects } from "../../../data/CardData";
import Card from "./ScrollCard";
import { useScroll } from "framer-motion";

interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

function CardwithScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      console.log("Scroll progress:", value);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <main ref={container} className="mt-[60vh] mb-[100vh]">
      {projects.map((project: Project, index: number) => {
        const targetScale = 1 - (projects.length - index) * 0.05;
        return (
          <Card
            index={index}
            key={index}
            {...project}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

export default CardwithScroll;
