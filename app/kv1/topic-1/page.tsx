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
      positionResult: 3,
      words: [
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
        {
          value: "Q",
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
    // cau hoi 2
    {
      positionResult: 2,
      words: [
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
          value: "L",
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
          value: "O",
          visible: false,
        },
      ],
      visible: false,
    },
    // ------------------------ dap an 4
    {
      positionResult: 3,
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
          value: "N",
          visible: false,
        },
        {
          value: "H",
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
          value: "B",
          visible: false,
        },
        {
          value: "O",
          visible: false,
        },
        {
          value: "F",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "3",
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
          value: "R",
          visible: false,
        },
        {
          value: "R",
          visible: false,
        },
        {
          value: "U",
          visible: false,
        },
      ],
      visible: false,
    },
      //  cau h???i 7
    {
      positionResult: 0,
      words: [
        {
          value: "I",
          visible: false,
        },
        {
          value: "M",
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
          value: "X",
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
      // cau hoi 9
    {
      positionResult: 6,
      words: [
        {
          value: "P",
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
          value: "M",
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
          value: "S",
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
      ],
      visible: false,
    },
    // cau hoi 10
    {
      positionResult: 5,
      words: [
        {
          value: "T",
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
          value: "I",
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
      ],
      visible: false,
    },
    // cau hoi 11
    {
      positionResult: 1,
      words: [
        {
          value: "T",
          visible: false,
        },
        {
          value: "R",
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
    // cau hoi 12
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
          value: "C",
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
      value: "????y l?? m???t lo???i c??p vi???n th??ng l??m b???ng th???y tinh ho???c nh???a, s??? d???ng ??nh s??ng ????? truy???n t??n hi???u v?? m???ng"
    },
    {
      key: "2",
      value: "B??? ph???n giao th??ng theo chi???u th???ng ?????ng, n???i li???n c??c kh??ng gian kh??ng c??ng cao ?????, c??n ???????c xem l?? m???t b??? ph???n k???t c???u l??m vi???c theo ph????ng ngang l?? g???"
    },
    {
      key: "3",
      value: "L?? b??? ph???n k???t c???u ch???u l???c b??n tr??n l??? c???a s??? ho???c c???a ??i, c?? t??c d???ng ????? ph???n t?????ng b??n tr??n?"
    },
    {
      key: "4",
      value: "Khi thanh to??n 100% gi?? tr??? ????n h??ng v??? T???ng c??ng ty th?? tr???ng th??i ????n h??ng s??? chuy???n qua tr???ng th??i?"
    },
    {
      key: "5",
      value: "Nh??n vi??n Qu???n l?? d???ch v??? k??? thu???t ???????c g???i t???t l???"
    },
    {
      key: "6",
      value: "Theo QT.VCC.MK.2.20.5, ?????i v???i c??c tr???m BTS, KPIs th???i gian 20 ng??y (t??? khi tri???n khai thi c??ng ?????n khi c??ng tr??nh ?????ng b??? h??? t???ng) ??p d???ng cho lo???i h??nh tr???m BTS n??o?"
    },
    {
      key: "7",
      value: "Theo quy tr??nh QT.VCC.MK.2.20.5, H???p ?????ng thu?? v??? tr?? ???????c ph?? duy???t tr??n ph???n m???m n??o?"
    },
    {
      key: "8",
      value: "Thi???t b??? ????? chuy??n di chuy???n, th???, ch??? nh???ng v???t li???u x??y d???ng nh?? v??i, v???a, g???ch, ?????"
    },
    {
      key: "9",
      value: "Ph??ng/ban n??o thu???c T???ng C??ng ty th???c hi???n ?????i so??t v???t t?? T???ng C??ng ty xu???t ra c??ng tr??nh v???i c??c Chi nh??nh C??ng tr??nh Viettel t???nh/th??nh ph???"
    },
    {
      key: "10",
      value: "Kho???ng th???i gian k??? t??? khi xi m??ng v?? c???t li???u tr???n v???i n?????c ?????n khi h???n h???p b?? t??ng ?????t c?????ng ????? theo quy ?????c l?? g???"
    },
    {
      key: "11",
      value: "H??? th???ng thu, ph??t s??ng di ?????ng, th?????ng d??ng trong ng??nh truy???n th??ng c??c thi???t b??? di ?????ng m???ng vi???n th??ng"
    },
    {
      key: "12",
      value: "Theo QT.VCC.MK.2.20.5, ?????i v???i c??c tr???m BTS tr??n m??i, KPIs th???i gian 30 ng??y (t??? khi tri???n khai thi c??ng ?????n khi c??ng tr??nh ?????ng b??? h??? t???ng) ??p d???ng cho lo???i h??nh tr???m BTS n??o?"
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
