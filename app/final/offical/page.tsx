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
          value: "D",
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
          value: "E",
          visible: false,
        },
        {
          value: "O",
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
    {
      positionResult: 4,
      words: [
        {
          value: "L",
          visible: false,
        },
        {
          value: "U",
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
      positionResult: 3,
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
          value: "L",
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
    // ------------------------ dap an 4
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
          value: "I",
          visible: false,
        },
        {
          value: "N",
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
    //  -------------- dap an 5
    {
      positionResult: 4,
      words: [
        {
          value: "Q",
          visible: false,
        },
        {
          value: "R",
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
          value: "E",
          visible: false,
        },
      ],
      visible: false,
    },
    //  ----------- dap an 6
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
          value: "T",
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
      ],
      visible: false,
    },
    //  cau h???i 7
    {
      positionResult: 3,
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
      ],
      visible: false,
    },
    /// cau hoi 8
    {
      positionResult: 5,
      words: [
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
    // cau hoi 9
    {
      positionResult: 0,
      words: [
        {
          value: "S",
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
      ],
      visible: false,
    },
    // cau hoi 10
    {
      positionResult: 3,
      words: [
        {
          value: "M",
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
    team7: 0,
    team8: 0,
    team9: 0,
    team10: 0,
  });
  const [play] = useSound('/approved-mission-205.wav');
  const [showALlNumber, setShowAllNumber] = useState(0);
  const [splash, setSplash] = useState(true);

  const questions = [
    {
      key: "1",
      value: "D??y an to??n ??ang s??? d???ng ????? FT tr??o c???t BTS l?? lo???i d??y n??o"
    },
    {
      key: "2",
      value: "C??c d??y co t???i c??c t???ng co ph???i ?????m b???o ?????t ??i???u g?? ????? cho c???t ??ng ten ???????c d???ng ch???c ch???n, kh??ng b??? cong nghi??ng?"
    },
    {
      key: "3",
      value: "S??? ti???n m?? ng?????i s??? d???ng lao ?????ng tr??? cho ng?????i lao ?????ng theo th???a thu???n ????? th???c hi???n c??ng vi???c."
    },
    {
      key: "4",
      value: "Xe ph??t s??ng c?? ?????ng c???a Fireco s??? d???ng lo???i v???t li???u g?? ????? n??ng/h??? chi???u cao c???t anten?"
    },
    {
      key: "5",
      value: "Trong l???p ?????t thi???t b??? Smarthome, k???t n???i b??? ??i???u khi???n trung t??m v???i ???ng d???ng ???AIO SMART HOME??? b???ng c??ch n??o?"
    },
    {
      key: "6",
      value: "D???ng c??? d??ng ?????ng c?? m??y v?? d??y c??p ????? n??ng v???t t??, h??ng h??a l??n cao ho???c k??o v???t di chuy???n tr??n m???t ngang / m???t nghi??ng"
    },
    {
      key: "7",
      value: "Nguy c?? n??o c?? th??? x???y ra khi ng?????i lao ?????ng l??m vi???c g???n ngu???n ??i???n cao ??p, vi ph???m quy ?????nh v??? kho???ng c??ch an to??n ??i???n"
    },
    {
      key: "8",
      value: "L?? m???t lo???i ???? nh??n t???o, ???????c h??nh th??nh b???i vi???c tr???n c??c th??nh ph???n: c???t li???u th??, c???t li???u m???n, ch???t k???t d??nh,... theo m???t t??? l??? nh???t ?????nh"
    },
    {
      key: "9",
      value: "????y l?? m???t ?????c t??nh quan tr???ng c???a s???i c??p quang, n?? ???nh h?????ng t???i thi???t k??? h??? th???ng th??ng tin quang do m???t n??ng l?????ng trong qu?? tr??nh truy???n d???n"
    },
    {
      key: "10",
      value: "C??ch s??? d???ng nhi???u ??ng-ten ????? ph??t v?? thu nh???n t??n hi???u c???a k???t n???i kh??ng d??y?"
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
          numberOfTeam={10}
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
          numberOfTeam={10}
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
