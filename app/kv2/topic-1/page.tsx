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
      positionResult: 6,
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
          value: "C",
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
          value: "O",
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
    {
      positionResult: 0,
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
    // ------------------------ dap an 3
    {
      positionResult: 5,
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
          value: "U",
          visible: false,
        },
        {
          value: "Y",
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
    // ------------------------ dap an 4
    {
      positionResult: 7,
      words: [
        {
          value: "X",
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
    //  -------------- dap an 5
    {
      positionResult: 0,
      words: [
        {
          value: "R",
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
        {
          value: "K",
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
          value: "A",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "S",
          visible: false,
        },
      ],
      visible: false,
    },
    //  cau h???i 7
    {
      positionResult: 6,
      words: [
        {
          value: "D",
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
          value: "R",
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
        {
          value: "A",
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
          value: "L",
          visible: false,
        },
        {
          value: "Y",
          visible: false,
        },
      ],
      visible: false,
    },
    /// cau hoi 8
    {
      positionResult: 0,
      words: [
        {
          value: "P",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "E",
          visible: false,
        },
      ],
      visible: false,
    },
    // cau hoi 9
    {
      positionResult: 3,
      words: [
        {
          value: "R",
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
          value: "H",
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
          value: "P",
          visible: false,
        },
        {
          value: "D",
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
      ],
      visible: false,
    },
    // ------------------------ dap an 10
    {
      positionResult: 3,
      words: [
        {
          value: "D",
          visible: false,
        },
        {
          value: "C",
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
          value: "W",
          visible: false,
        },
      ],
      visible: false,
    },
    //  -------------- dap an 11
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
    //  ----------- dap an 12
    {
      positionResult: 6,
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
          value: "G",
          visible: false,
        },
      ],
      visible: false,
    },
    //  cau h???i 13
    {
      positionResult: 2,
      words: [
        {
          value: "S",
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
          value: "H",
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
          value: "T",
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
    /// cau hoi 14
    {
      positionResult: 3,
      words: [
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
          value: "G",
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
          value: "A",
          visible: false,
        },
        {
          value: "T",
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
          value: "A",
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
          value: "G",
          visible: false,
        },
      ],
      visible: false,
    },
    // cau hoi 15
    {
      positionResult: 3,
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
          value: "I",
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
    team10: 0,
    team11: 0,
    team12: 0,
    team13: 0,
    team14: 0,
    team15: 0,
  });
  const [play] = useSound('/approved-mission-205.wav');
  const [showALlNumber, setShowAllNumber] = useState(0);
  const [splash, setSplash] = useState(true);

  const questions = [
    {
      key: "1",
      value: "L?? lo???i h??? s?? c???n thi???t v?? b???t bu???c khi c??ng nh??n v??o c??ng tr?????ng x??y d???ng"
    },
    {
      key: "2",
      value: "????y l?? t??n g???i c???a t??? chuy???n m???ch t??? ??i???n l?????i ho???c m??y ph??t ??i???n, c???p ??i???n ?????u v??o cho t??? ngu???n DC-mini trong tr???m RRU?"
    },
    {
      key: "3",
      value: "C???m bi???n n??o th?????ng ???????c g???n tr???n, s??? d???ng cho gi???i ph??p chi???u s??ng WC t??? ?????ng v?? c???u thang t??? ?????ng?"
    },
    {
      key: "4",
      value: "????y l?? h???ng m???c h??? t???ng vi???n th??ng c?? th??? di ?????ng ???????c, bao g???m: Xe ??t?? c?? s???, th??ng xe, thi???t b??? tr???m, h??? th???ng ngu???n ph??? tr???"
    },
    {
      key: "5",
      value: "????y l?? lo???i t??? t???o t??? c??c thanh ti??u chu???n c?? ?????t l???, d??ng ????? ?????t c??c thi???t b??? m???ng nh?? Server, Router, Switch, UPS, b??? l??u tr???...?"
    },
    {
      key: "6",
      value: "Thi???t b??? d??ng ????? chuy???n ?????i ngu???n t??? ?????ng t??? ngu???n ??i???n ch??nh(??i???n l?????i) sang ngu???n d??? ph??ng khi c?? s??? c??? ???????c g???i l?? g???"
    },
    {
      key: "7",
      value: "????y l?? ph??p ??o ki???m gi?? tr??? ??i???n tr??? gi???a 2 ?????i t?????ng, v?? d??? nh?? ????? x??c ?????nh m???c ????? c??ch ??i???n gi???a t???m pin m???t tr???i v?? khung gi??n pin?"
    },
    {
      key: "8",
      value: "C??ng ngh??? n??o gi??p cho camera an ninh k??? thu???t s??? c?? th??? ???????c c???p ngu???n ??i???n th??ng qua c??p m???ng?"
    },
    {
      key: "9",
      value: "L?? c??c ???????ng n???i c??c v??? tr?? c???c ?????t trong b??i ti???p ?????a?"
    },
    {
      key: "10",
      value: "????y l?? ng?????ng gi?? tr??? ??i???n ??p DC th???p, l?? gi?? tr??? m?? ??i???n ??p DC gi???m ?????n m???c n??y th?? h??? th???ng ngu???n DC s??? k??ch ho???t c???nh b??o?"
    },
    {
      key: "11",
      value: "????y l?? k???t c???u b?? t??ng li??n k???t v???i c??c t???ng d??y co c?? t??c d???ng gi??? c??? ?????nh c???t anten tr???m BTS?"
    },
    {
      key: "12",
      value: "????y l?? m???t ki???n tr??c trong ng??i nh?? hay t??a nh?? , m???t kh??ng gian theo chi???u ngang ???????c nh?? ra v?? n???i li???n v???i m???t b???c t?????ng tr?????c m???t c??nh c???a v?? th?????ng c?? g???n lan can an to??n"
    },
    {
      key: "13",
      value: "L?? b??? ph???n thu???c k???t c???u gi??n gi??o x??y d???ng, gi??p ng?????i lao ?????ng c?? th??? di chuy???n d??? d??ng tr??n c??c gi??n gi??o"
    },
    {
      key: "14",
      value: "M???t trong nh???ng th??ng s??? k??? thu???t ?????u ra c???a b??? inverter c???n ?????t ???????c theo y??u c???u c???a EVN v??? k???t n???i h??? th???ng ??i???n m???t tr???i v???i l?????i ??i???n?"
    },
    {
      key: "15",
      value: "Trong quy ?????nh ?????u n???i thi???t b??? tr??n t??? ngu???n DC ?????i v???i tr???m truy nh???p, nh??m c??c thi???t b??? truy???n d???n, ATS, Timer, c???nh b??o kh??i, AGG, SHE, EDFA lo???i 1 port... ???????c ph??n th??nh nh??m t???i n??o?"
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
          numberOfTeam={15}
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
          numberOfTeam={15}
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
