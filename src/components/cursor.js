import React from "react"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX - 10, y: clientY - 10 });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="custom-cursor">
      <motion.div
        style={{ left: `calc(${mousePosition.x}px - 0.75rem)`, top: `calc(${mousePosition.y}px - 0.8rem)` }}
        className="fixed bg-white/5  border-2 border-black/20 top-0 left-0 w-[3rem] h-[3rem] rounded-full z-[900] pointer-events-none"
      ></motion.div>
      <motion.div
        style={{ left: `calc(${mousePosition.x}px + 7px)`, top: `calc(${mousePosition.y}px + 7px)` }}
        className="fixed bg-black top-0 left-0 w-[10px] h-[10px] rounded-full z-[900] pointer-events-none"
      ></motion.div>
    </div>
  );
}