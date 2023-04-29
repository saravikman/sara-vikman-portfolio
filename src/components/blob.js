import * as React from "react"
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

export default function Blob({ color, place }) {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX-250, y: event.clientY-250 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div>
    <motion.div className={`bg-[#F8E0E0] text-white w-[30rem] h-[30rem] rounded-full absolute z-1 top-3 left-0 blur-[44px]`}
    animate={{ x: [null, mousePos.x], y:[null, mousePos.y] }}
    transition={{ duration: 2}}
    >
      {/*The mouse is at position{' '}<b>({mousePos.x}, {mousePos.y})</b>*/}
    </motion.div>

    <motion.div className={`bg-[#e2d5d5] text-white w-[50rem] h-[50rem] rounded-full absolute z-0 bottom-0 right-0 blur-[74px]`}
    animate={{ x: [null, mousePos.x], y:[null, mousePos.y] }}
    transition={{ duration: 10}}
    >
      {/*The mouse is at position{' '}<b>({mousePos.x}, {mousePos.y})</b>*/}
    </motion.div>
    </div>
  );
}