import {motion} from "framer-motion";
import Backdrop from "./backdrop";
import {Formik} from 'formik';
import Flashcards from "@/components/flashcard";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};


const ModalPoint = ({handleClose, points}: any) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        id="show-points"
      >
        <div>
          <div className="">
            <Flashcards points={points}/>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};


export default ModalPoint;