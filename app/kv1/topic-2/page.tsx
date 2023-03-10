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
      positionResult: 4,
      words: [
        {
          value: "C",
          visible: false,
        },
        {
          value: "H",
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
          value: "C",
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
    //cau hoi 2
    {
      positionResult: 1,
      words: [
        {
          value: "K",
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
          value: "I",
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
          value: "N",
          visible: false,
        },
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
          value: "I",
          visible: false,
        },
        {
          value: "N",
          visible: false,
        },
        {
          value: "V",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "R",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
        {
          value: "R",
          visible: false,
        },
      ],
      visible: false,
    },
    //  -------------- dap an 5
    {
      positionResult: 1,
      words: [
        {
          value: "L",
          visible: false,
        },
        {
          value: "L",
          visible: false,
        },
        {
          value: "V",
          visible: false,
        },
        {
          value: "D",
          visible: false,
        },
      ],
      visible: false,
    },
    //  ----------- dap an 6
    {
      positionResult: 5,
      words: [
        {
          value: "K",
          visible: false,
        },
        {
          value: "H",
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
        {
          value: "V",
          visible: false,
        },
        {
          value: "U",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
      ],
      visible: false,
    },
    // ------------------------ dap an 7
    {
      positionResult: 5,
      words: [
        {
          value: "D",
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
          value: "B",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "K",
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
    //  -------------- dap an 8
    {
      positionResult: 3,
      words: [
        {
          value: "H",
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
          value: "T",
          visible: false,
        },
        {
          value: "H",
          visible: false,
        },
        {
          value: "I",
          visible: false,
        },
      ],
      visible: false,
    },
    //  ----------- dap an 9
    {
      positionResult: 3,
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
    // ------------------------ dap an 10
    {
      positionResult: 0,
      words: [
        {
          value: "C",
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
      ],
      visible: false,
    },
    //  -------------- dap an 11
    {
      positionResult: 1,
      words: [
        {
          value: "D",
          visible: false,
        },
        {
          value: "A",
          visible: false,
        },
        {
          value: "Q",
          visible: false,
        },
        {
          value: "V",
          visible: false,
        },
        {
          value: "2",
          visible: false,
        },
      ],
      visible: false,
    },
    //  ----------- dap an 12
    {
      positionResult: 5,
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
          value: "O",
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
      value: "B??? ph???n n??o tr??n xe ph??t s??ng c?? ?????ng d??ng ????? n??ng/h??? xe theo ph????ng th???ng ?????ng, c?? t??c d???ng tr??? l???c ho???c ch???u t???i to??n b??? cho c??c b??nh xe?"
    },
    {
      key: "2",
      value: "Ch??? ????? ?????u ti??n ph???i ki???m tra sau khi kh???i ?????ng m??y ph??t ??i???n?"
    },
    {
      key: "3",
      value: "D???ng c??? n??ng ????? con ng?????i, c??ng c??? c???m tay ????? th???c thi c??c c??ng vi???c trong kh??ng gian c?? ????? cao so v???i c??c m???t n???n c?? s????"
    },
    {
      key: "4",
      value: "Trong h??? th???ng ??i???n m???t tr???i, ????y l?? thi???t b??? chuy???n ?????i d??ng ??i???n 1 chi???u th??nh d??ng ??i???n xoay chi???u"
    },
    {
      key: "5",
      value: "????y l?? ng?????ng ??i???n ??p c???t cho t???i kh??ng ??u ti??n. Khi ??i???n ??p DC gi???m ?????n m???c n??y th?? h??? th???ng ngu???n DC s??? ng???t c??c t???i kh??ng ??u ti??n?"
    },
    {
      key: "6",
      value: "D???ng c??? ?????ng v???t li???u nh?? xi m??ng, h??? t??????"
    },
    {
      key: "7",
      value: "Thi???t b??? l???p tr??n c???t BTS cao tr??n 45m ????? c???nh b??o v??? ????m g???i l?? g??? "
    },
    {
      key: "8",
      value: "Trong ba nhu c???u s??? d???ng Smarthome: hi???n th???, ??i???u khi???n, gi??m s??t. ????u l?? nhu c???u b???t bu???c ph???i c???"
    },
    {
      key: "9",
      value: "D???i t???n s??? c???a s??ng ??i???n t??? ???????c s??? d???ng ????? thu, ph??t c??c t??n hi???u li??n l???c gi???a c??c thi???t b??? s??? d???ng c??ng ngh??? kh??ng d??y ???????c g???i l?? g???"
    },
    {
      key: "10",
      value: "????y l?? ch??? vi???t t???t c???a b??? gi??m s??t ??i???u khi???n t??? ngu???n DC-mini?"
    },
    {
      key: "11",
      value: "Card gi??m s??t t??? ngu???n Emerson/Agisson/ZTE do C??ng ty TNHH MTV Th??ng tin M1 cung c???p ???????c g???i l?? g???"
    },
    {
      key: "12",
      value: "C??ng t??c c???p n?????c cho qu?? tr??nh th???y h??a c???a xi m??ng, ?????m b???o k???t c???u kh??ng b??? n???t, ph??t tri???n c?????ng ????? l?? c??ng t??c g???"
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
