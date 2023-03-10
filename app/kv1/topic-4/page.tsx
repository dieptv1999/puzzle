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
      positionResult: 7,
      words: [
        {
          value: "D",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "W",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "L",
          visible: false,
        },
        {
          value: "I",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "K",
          visible: false,
        },
      ],
      visible: false,
    },
    {
      positionResult: 2,
      words: [
        {
          value: "B",
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
      ],
      visible: false,
    },
    // ------------------------ dap an 3
    {
      positionResult: 2,
      words: [
        {
          value: "M",
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
        {
          value: "C",
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
          value: "G",
          visible: false,
        },
        {
          value: "I",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "Y",
          visible: false,
        },
        {
          value: "P",
          visible: false,
        },
        {
          value: "H",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "P",
          visible: false,
        },
        {
          value: "X",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "Y",
          visible: false,
        },
        {
          value: "D",
          visible: false,
        },
        {
          value: "U",
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
    //  -------------- dap an 5
    {
      positionResult: 3,
      words: [
        {
          value: "W",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "L",
          visible: false,
        },
        {
          value: "K",
          visible: false,
        },
        {
          value: "I",
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
          value: "M",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
      ],
      visible: false,
    },
    //  ----------- dap an 6
    {
      positionResult: 1,
      words: [
        {
          value: "B",
          visible: false,
        },
        {
          value: "I",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "H",
          visible: false,
        },
        {
          value: "C",
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
        {
          value: "H",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
      ],
      visible: false,
    },
      //  cau h???i 7
    {
      positionResult: 3,
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
          value: "C",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "S",
          visible: false,
        },
        {
          value: "S",
          visible: false,
        },
      ],
      visible: false,
    },
      /// cau hoi 8
    {
      positionResult: 2,
      words: [
        {
          value: "T",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "M",
          visible: false,
        },
        {
          value: "L",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "C",
          visible: false,
        },
      ],
      visible: false,
    },
      // cau hoi 9
    {
      positionResult: 0,
      words: [
        {
          value: "S",
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
      ],
      visible: false,
    },
    //  cau h???i 10
    {
      positionResult: 0,
      words: [
        {
          value: "O",
          visible: false,
        },
        {
          value: "D",
          visible: false,
        },
        {
          value: "F",
          visible: false,
        },
      ],
      visible: false,
    },
    /// cau hoi 11
    {
      positionResult: 4,
      words: [
        {
          value: "M",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "Y",
          visible: false,
        },
        {
          value: "D",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "M",
          visible: false,
        },
        {
          value: "B",
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
    // cau hoi 12
    {
      positionResult: 3,
      words: [
        {
          value: "N",
          visible: false,
        },
        {
          value: "H",
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
          value: "M",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "Y",
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
  });
  const [play] = useSound('/approved-mission-205.wav');
  const [showALlNumber, setShowAllNumber] = useState(0);
  const [splash, setSplash] = useState(true);

  const questions = [
    {
      key: "1",
      value: "???????ng truy???n d??? li???u t??? tr???m BTS ?????n thi???t b??? ?????u cu???i"
    },
    {
      key: "2",
      value: "Ngo??i s??ng truy???n th??ng Zigbee v?? WiFi, h??? th???ng VCC SmartHome c??n s??? d???ng lo???i s??ng truy???n th??ng n??o n???a"
    },
    {
      key: "3",
      value: "????y l?? k???t c???u b?? t??ng li??n k???t v???i c??c t???ng d??y co c?? t??c d???ng c??? ?????nh c???t anten tr???m BTS"
    },
    {
      key: "4",
      value: "V??n b???n ph??p l?? do c?? quan nh?? n?????c c?? th???m quy???n c???p cho C??T ????? x??y m???i, s???a ch???a, c???i t???o v?? di d???i c??ng tr??nh?"
    },
    {
      key: "5",
      value: "T??nh n??ng tr??? kh???i ?????ng c???a t??? ngu???n g???i l?? g???"
    },
    {
      key: "6",
      value: "L?? m???t trong nh???ng thi???t b??? d??ng ????? ph??ng ch??y ch???a ch??y, th?????ng ???????c s??? d???ng ????? d???p t???t v?? ki???m so??t c??c ????m ch??y nh???, l???."
    },
    {
      key: "7",
      value: "L???p tr???m truy nh???p c??n ???????c g???i l?? g??"
    },
    {
      key: "8",
      value: "Trong b???o d?????ng m??y h??t m??i, ????y l?? m???t trong nh???ng b??? ph???n c???n v??? sinh c??? r???a, tr??nh ??m m??i"
    },
    {
      key: "9",
      value: "Thi???t b??? c???t ch???ng s??t lan truy???n, h???n ch??? qu?? ??i???n ??p tho??ng qua v?? b???o v??? ph??? t???i trong c??c t??? ngu???n ???????c g???i l?? g???"
    },
    {
      key: "10",
      value: "T??n vi???t t???t c???a h???p ph???i quang l?? g???"
    },
    {
      key: "11",
      value: "D???ng c??? l??m c??c h???t ph???i li???u trong kh???i b?? t??ng xen k???, s???p x???p ch???t nhau do l???c ma s??t b??? ph?? v????"
    },
    {
      key: "12",
      value: "Lo???i ch???t l???ng c?? t??c d???ng b??i tr??n, l??m m??t, gi???m ma s??t, ch???ng m??i m??n c??c chi ti???t m??y gi??p k??o d??i tu???i th??? m??y ph??t ??i???n?"
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
            Tr?? ch??i ?? ch???
          </p>
          <p
            className="cursor-pointer hover:bg-red-400 active:text-white hover:text-white active:bg-red-600"
            onClick={() => (modalOpen ? close() : open())}
          >
            Nh???p ??i???m
          </p>
          <p
            className="cursor-pointer hover:bg-red-400 active:text-white hover:text-white active:bg-red-600"
            onClick={() => {
              if (modalPointOpen) {
                setModalPointOpen(false);
              } else setModalPointOpen(true);
            }}
          >
            Xem ??i???m
          </p>
        </div>
        <div className={styles.logoContainer}>
          <Link
            href=""
            rel="noopener noreferrer"
          >
            Ph??t tri???n b???i{' '}
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

      <div className="w-full flex flex-col items-center relative">
        <div className={styles.center}>
          <Crosswords rows={rows}/>
        </div>
        <div
          onClick={showAll}
          className={`h-[46px] w-[350px] flex justify-center items-center cursor-pointer my-[2px] text-white
              bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded`}>
          Hi???n th??? ????p ??n
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
                Hi???n th???
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
