'use client';
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from './page.module.css'
import Crosswords from "@/components/crosswords";
import Link from "next/link";
// @ts-ignore
import Flashcards from '../components/flashcard';
import {useEffect, useState} from "react";
import Question from "@/components/question/question";
import {useWindowSize} from "react-use";
import Confetti from 'react-confetti'
import {AnimatePresence, motion} from 'framer-motion';
import Modal from '@/components/modal/modal';
import useSound from "use-sound";
import ModalPoint from "@/components/modal/modal_point";

// const inter = Inter({subsets: ['latin']})

export default function Home() {
  const [rows, setRows] = useState([
    {
      positionResult: 2,
      words: [
        {
          value: "F",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "C",
          visible: false,
        },
      ],
      visible: false,
    },
    {
      positionResult: 0,
      words: [
        {
          value: "H",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "P",
          visible: false,
        },
        {
          value: "D",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "G",
          visible: false,
        },
      ],
      visible: false,
    },
    // ------------------------ dap an 3
    {
      positionResult: 1,
      words: [
        {
          value: "T",
          visible: false,
        },
        {
          value: "I",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "D",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
      ],
      visible: false,
    },
    // ------------------------ dap an 4
    {
      positionResult: 5,
      words: [
        {
          value: "V",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "I",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "L",
          visible: false,
        },
        {
          value: "U",
          visible: false,
        },
        {
          value: "U",
          visible: false,
        },
      ],
      visible: false,
    },
    //  -------------- dap an 5
    {
      positionResult: 2,
      words: [
        {
          value: "B",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "G",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
      ],
      visible: false,
    },
    //  ----------- dap an 6
    {
      positionResult: 0,
      words: [
        {
          value: "L",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "C",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "P",
          visible: false,
        },
      ],
      visible: false,
    },
    // ------------------------ dap an 7
    {
      positionResult: 3,
      words: [
        {
          value: "K",
          visible: false,
        },
        {
          value: "Y",
          visible: false,
        },
        {
          value: "S",
          visible: false,
        },
        {
          value: "U",
          visible: false,
        },
        {
          value: "K",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "C",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "U",
          visible: false,
        },
      ],
      visible: false,
    },
    //  -------------- dap an 8
    {
      positionResult: 1,
      words: [
        {
          value: "H",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "M",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "C",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "R",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "L",
          visible: false,
        },
        {
          value: "L",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "R",
          visible: false,
        }
      ],
      visible: false,
    },
    //  ----------- dap an 9
    {
      positionResult: 1,
      words: [
        {
          value: "A",
          visible: false,
        },
        {
          value: "C",
          visible: false,
        },
        {
          value: "D",
          visible: false,
        },
        {
          value: "B",
          visible: false,
        },
      ],
      visible: false,
    },
  ]);
  const [question, setQuestion] = useState(-1);
  const [allowClick, setAllowClick] = useState(true);
  const [finish, setFinish] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPointOpen, setModalPointOpen] = useState(false);
  const [points, setPoints] = useState({
    team1: 0,
    team2: 0,
    team3: 0,
    team4: 0,
    team5: 0,
    team6: 0,
    team7: 0,
    team8: 0,
    team9: 0,
  });
  const [play] = useSound('/approved-mission-205.wav');
  const [showALlNumber, setShowAllNumber] = useState(0);
  const [splash, setSplash] = useState(true);

  const questions = [
    {
      key: "1",
      value: "Từ viết tắt của thành phần cơ khí của bộ thông gió lọc bụi cho nhà trạm là gì?"
    },
    {
      key: "2",
      value: "Là một cam kết giữa 2 hay nhiều bên (pháp nhân) để làm hoặc không làm một việc nào đó trong khuôn khổ pháp luật?"
    },
    {
      key: "3",
      value: "Là mức độ tiến triển của công việc trong một khoản thời gian nhất định?"
    },
    {
      key: "4",
      value: "Bộ phận đấu nối từ máy bơm ra motor, điều tiết lượng nước cho chổi lau bán tự động trong vệ sinh dàn pin mặt trời?"
    },
    {
      key: "5",
      value: "Dải tần số hoạt động của sóng điện từ sử dụng công nghệ không dây được gọi là gì?"
    },
    {
      key: "6",
      value: "Có hình dáng như giọt nước, để tránh điểm gấp đầu cáp bị bẹp dẫn đến gãy gập hoặc bị mài mòn, gọi là gì?"
    },
    {
      key: "7",
      value: "Nhiệm vụ Tính toán độ bền của các loại vật liệu để đảm bảo sự phù hợp với kết cấu là của ai?"
    },
    {
      key: "8",
      value: "Tên đầy đủ của thiết bị điều khiển trung tâm trong hệ thống Smarthome?"
    },
    {
      key: "9",
      value: "Đây là tên gọi của tủ chuyển mạch từ điện lưới hoặc máy phát điện, cấp điện đầu vào cho tủ nguồn DC-mini trong trạm RRU?"
    }
  ];

  function showAll() {
    if (showALlNumber === 0) {
      setRows(rows.map(r => ({
        ...r,
        visible: false,
        words: r.words.map((w, idx) => ({
          ...w,
          visible: r.positionResult === idx ? true : w.visible,
        }))
      })))
      setShowAllNumber(1);
    } else if (showALlNumber === 1) {
      setRows(rows.map(r => ({
        ...r,
        visible: true,
        words: r.words.map(w => ({
          ...w,
          visible: true,
        }))
      })))
    }
    play();
  }

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  // @ts-ignore
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="flex space-x-4">
          <p>
            Trò chơi ô chữ
          </p>
          <p
            className="cursor-pointer hover:bg-red-400 active:text-white hover:text-white active:bg-red-600"
            onClick={() => (modalOpen ? close() : open())}
          >
            Nhập điểm
          </p>
          <p
            className="cursor-pointer hover:bg-red-400 active:text-white hover:text-white active:bg-red-600"
            onClick={() => {
              if (modalPointOpen) {
                setModalPointOpen(false);
              } else setModalPointOpen(true);
            }}
          >
            Xem điểm
          </p>
        </div>
        <div className={styles.logoContainer}>
          <Link
            href=""
            rel="noopener noreferrer"
          >
            Phát triển bởi{' '}
            <Image
              src="/vcc_logo.png?v=1"
              alt="VCC Logo"
              className={styles.vercelLogo}
              objectFit={'contain'}
              width={100}
              height={100 / 561 * 233}
              priority
            />
          </Link>
        </div>
      </div>

      {/*<div className="">*/}
      {/*  <Flashcards points={points}/>*/}
      {/*</div>*/}
      <div className="w-full mt-20">
        <Question
          question={question >= 0 ? questions[question] : null}
          complete={() => setAllowClick(true)}
          onStart={() => setAllowClick(false)}
          // next={() => {
          //   if (question + 1 == questions.length - 1) {
          //     setTimeout(() => {
          //       setFinish(true);
          //     }, 20 * 1000)
          //   }
          //   if (question < questions.length - 1)
          //     setQuestion(question + 1)
          // }}
          setFinish={setFinish}
        />
      </div>

      <div className="w-full flex flex-col items-center relative max-w-screen-lg">
        <div className={styles.center}>
          <Crosswords rows={rows}/>
        </div>
        <div
          onClick={showAll}
          className={`h-[46px] w-[350px] flex justify-center items-center cursor-pointer my-[2px] text-white
              bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded`}>
          Hiển thị đáp án
        </div>
        <div className="absolute right-0 top-0 h-full flex flex-col justify-center pb-[46px]">
          {rows.map((row, index) => {
            return (
              <div className={`h-[46px] flex justify-center items-center cursor-pointer my-[2px]
                bg-transparent hover:bg-blue-500 ${question == index ? 'text-white' : 'text-gray-400'} font-semibold hover:text-white py-2 px-4 border-2 
                ${question == index ? 'border-white' : 'border-gray-500'}
                 hover:border-transparent rounded`}
                   onClick={() => {
                     if (question == index) {
                       setRows(rows.map((r, idx) => {
                         if (index === idx) {
                           return {
                             ...r,
                             visible: true,
                             words: r.words.map(w => {
                               w.visible = true;
                               return w;
                             })
                           };
                         } else return r;
                       }))
                       play();
                     }
                   }}
              >
                Hiển thị
              </div>
            )
          })}
        </div>
        <div className="absolute left-0 top-0 h-full flex flex-col justify-center pb-[46px]">
          {rows.map((row, index) => {
            return (
              <div
                className={`h-[46px] flex justify-center items-center cursor-pointer my-[2px] border-2 ${question === index ? 'bg-blue-500 border-red-600' : 'border-white'}
                  bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded-full`}
                onClick={() => {
                  if (allowClick && question !== index) {
                    setQuestion(index);
                  }
                }}
              >
                {index + 1}
              </div>
            )
          })}
        </div>
      </div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal
          modalOpen={modalOpen}
          handleClose={close}
          config={[5, 2, 20 - question]}
          points={points}
          setPoints={setPoints}
          numberOfTeam={9}
        />}
      </AnimatePresence>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalPointOpen && <ModalPoint
          modalOpen={modalPointOpen}
          handleClose={() => setModalPointOpen(false)}
          points={points}
          numberOfTeam={9}
        />}
      </AnimatePresence>

      {/*{splash ?*/}
      {/*  <AnimatePresence>*/}
      {/*    <motion.div*/}
      {/*      className="fixed top-0 left-0 h-full w-full bg-white"*/}
      {/*      initial={{opacity: 0}}*/}
      {/*      animate={{opacity: 1}}*/}
      {/*      exit={{opacity: 0}}*/}
      {/*    >*/}
      {/*      <div className="flex items-center justify-center h-full">*/}
      {/*        <Image*/}
      {/*          src="/vcc_logo.png?v=1"*/}
      {/*          alt="VCC Logo"*/}
      {/*          className={styles.vercelLogo}*/}
      {/*          objectFit={'contain'}*/}
      {/*          width={150}*/}
      {/*          height={160 / 561 * 233}*/}
      {/*          priority*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </motion.div>*/}
      {/*  </AnimatePresence>*/}
      {/*  : <div/>*/}
      {/*}*/}
    </main>
  )
}
