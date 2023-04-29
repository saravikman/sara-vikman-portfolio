import React from "react"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  
    useEffect(() => {
      const mouseMoveHandler = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
      };
      document.addEventListener("mousemove", mouseMoveHandler);
  
      return () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
      };
    }, []);

  return (
    <>
            {/* 2. */}
      <motion.div
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        className="fixed bg-black top-0 left-0 w-[22px] h-[22px] border-2 rounded-full border-zinc-900 z-[900] pointer-events-none"
      ></motion.div>
            {/* 3. */}
    </>
  );
}