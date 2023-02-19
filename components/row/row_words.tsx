import {RowModel} from "@/model/row";
import Cell from "@/components/cell";
import {memo} from "react";
import { motion } from "framer-motion";

export const RowWords = memo(({row}: { row: RowModel }) => {

  const words = row.words;

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <motion.div
      className="flex"
      initial="hidden"
      // animate="visible"
      animate={row.visible ? "visible" : "hidden"}
      variants={container}
    >
      {words.map((word, index) => <Cell
        word={word}
        active={index === row.positionResult}
        isFirst={index === 0}
        isTail={index === words.length - 1}
      />)}
    </motion.div>
  )
});