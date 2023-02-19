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
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      color: "#FF0088",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  return (
    <div className={`h-[50px] w-[50px] flex items-center justify-center overflow-hidden
    font-semibold text-black bg-white border ${active ? 'bg-yellow-400' : ''}`}>
      <motion.div
        style={{ display: "inline-block" }}
        variants={item}
      >
        {word.value}
      </motion.div>
    </div>
  )
}