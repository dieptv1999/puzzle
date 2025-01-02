import {motion} from "framer-motion";
import Backdrop from "./backdrop";
import {Formik} from 'formik';
import Flashcards from "@/components/flashcard";
import Confetti from "react-confetti";
import {useState} from "react";
import {useWindowSize} from "react-use";
import useSound from "use-sound";

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


const ModalPoint = ({handleClose, points, numberOfTeam = 9}: any) => {
  const [congrat, setCongrat] = useState(false);
  const [team, setTeam] = useState<any>(null);
  const {width, height} = useWindowSize();
  const [play] = useSound('preview.mp3');

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
            <Flashcards points={points} numberOfTeam={numberOfTeam}/>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-xl font-bold">Đội chiến thắng là đội</div>
            <input
              className="border rounded my-2 text-2xl p-2 w-28"
              type={'number'}
              max={numberOfTeam || 100}
              onChange={e => setTeam(e.target.value)}
            />
            {team && <div
              className={`flex justify-center items-center cursor-pointer my-[2px] text-2xl
              bg-white hover:bg-red-700 text-red-500 hover:text-white font-bold py-2 px-4 rounded border-2 border-red-500`}
              onClick={() => {
                if (team) {
                  setCongrat(true);
                  play();
                }
              }}
            >Chúc mừng đội chiến thắng
            </div>}
          </div>
        </div>
      </motion.div>
      {congrat && <div
        className="absolute h-full w-full left-0 top-0 bg-black bg-opacity-70 text-white text-7xl flex items-center justify-center">
        Chúc mừng đội {team}
      </div>}
      {congrat && <Confetti
        width={width}
        height={height}
      >
      </Confetti>}
    </Backdrop>
  );
};


export default ModalPoint;