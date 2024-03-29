'use client';
import {Word} from "@/model/word";
import { motion } from "framer-motion";

//${isFirst ? 'rounded-tl-md rounded-bl-md' : ''} ${isTail ? 'rounded-tr-md rounded-br-md' : ''}
export function Cell({
                       word,
                       active,
                       isFirst,
                       isTail
                     }: { word: Word, active: boolean, isFirst: boolean, isTail: boolean }) {

  const item = {
    hidden: {
      y: "200%",
      opacity: 0,
      color: "white",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, }
    },
    visible: {
      y: 0,
      opacity: 1,
      color: "black",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  return (
    <div className={`h-[50px] w-[50px] flex items-center justify-center overflow-hidden
    font-semibold text-black bg-white text-xl border ${active ? 'bg-yellow-400' : ''}`}>
      <motion.div
        style={{ display: "inline-block" }}
        variants={item}
        animate={word.visible != null ? word.visible ?  "visible" : "hidden" : 'hidden'}
      >
        {word.value}
      </motion.div>
    </div>
  )
}