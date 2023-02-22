import {AnimatePresence, motion} from "framer-motion";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {useEffect, useState} from "react";

const Question = ({question, next, setFinish, complete, onStart}: any) => {
    const [time, setTime] = useState(1);
    const [start, setStart] = useState(false);

    useEffect(() => {
        setStart(false);
    }, [question]);

    const item = {
        hidden: {
            x: "200%",
            color: "#0055FF",
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
        },
        visible: {
            x: 0,
            color: "#FF0088",
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75}
        }
    };

    if (question) {
        return (
            <div className="flex justify-between w-full items-center space-x-4 h-[80px]">
                <div
                    className="border-4 h-[60px] w-[60px] rounded-full border-red-600 flex items-center justify-center text-3xl text-white">
                    {question.key}
                </div>
                <div className="flex-1 overflow-hidden">
                    <AnimatePresence>
                        <motion.div
                            key={question.key}
                            className="text-2xl text-center text-white"
                            variants={item}
                        >
                            {question.value}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex items-center space-x-6">
                    {start ? <CountdownCircleTimer
                            isPlaying
                            duration={20}
                            key={time + 'countdown'}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                            strokeWidth={5}
                            size={80}
                            onComplete={complete}
                        >
                            {({remainingTime}) => remainingTime}
                        </CountdownCircleTimer>
                        : <div
                            onClick={() => {
                                setTime(time + 1);
                                setStart(true);
                            }}
                            className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border
                        border-white-500 hover:border-transparent rounded cursor-pointer"
                        >Bắt đầu</div>}
                </div>
            </div>
        );
    } else {
        return <div className="h-[80px]"/>;
    }
}

export default Question;
