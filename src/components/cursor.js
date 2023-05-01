import React from "react"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  
    useEffect(() => {
      const mouseMoveHandler = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX-10, y: clientY-10 });
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
        className="fixed bg-black top-0 left-0 w-[24px] h-[24px] rounded-full z-[900] pointer-events-none"
      ></motion.div>
            {/* 3. */}
    </>
  );
}