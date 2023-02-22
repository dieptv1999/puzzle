'use client';
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from './page.module.css'
import Crosswords from "@/components/crosswords";
import Link from "next/link";
// @ts-ignore
import Flashcards from '../components/flashcard';
import {useState} from "react";
import Question from "@/components/question/question";
import {useWindowSize} from "react-use";
import Confetti from 'react-confetti'
import { AnimatePresence } from 'framer-motion';
import Modal from '@/components/modal/modal';

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const [rows, setRows] = useState([
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
          value: "U",
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
          value: "C",
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
          value: "T",
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
        }
      ],
      visible: false,
    },
    {
      positionResult: 6,
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
          value: "U",
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
          value: "T",
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
        }
      ],
      visible: false,
    },
    // ------------------------ dap an 3
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
      positionResult: 3,
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
          value: "I",
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
          value: "I",
          visible: false,
        },
        {
          value: "T",
          visible: false,
        },
        {
          value: "U",
          visible: false,
        },
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
      ],
      visible: false,
    },
    //  -------------- dap an 5
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
        }
      ],
      visible: false,
    },
    //  ----------- dap an 6
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
          value: "I",
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
          value: "I",
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
          value: "O",
          visible: false,
        },
      ],
      visible: false,
    },
  ]);
  const {width, height} = useWindowSize();
  const [question, setQuestion] = useState(-1);
  const [congrat, setCongrat] = useState(false);
  const [allowClick, setAllowClick] = useState(true);
  const [finish, setFinish] = useState(false);
  const [team, setTeam] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [points, setPoints] = useState({
      team1: 0,
      team2: 0,
      team3: 0,
      team4: 0,
      team5: 0,
      team6: 0,
  });
  const [showALlNumber, setShowAllNumber] = useState(0);

  const questions = [
    {
      key: "1",
      value: "Dụng cụ có khả năng kéo dài nhờ lò xo bên trong và được dùng trong xây dựng, đo đạc?"
    },
    {
      key: "2",
      value: "Dụng cụ đo chính xác độ nghiêng của mặt phẳng, đo độ thăng bằng khi lắp đặt vật dụng nội thất, đo độ dốc của mặt đường, mặt phẳng nghiêng?"
    },
    {
      key: "3",
      value: "Dụng cụ nâng đỡ con người, công cụ cầm tay để thực thi các công việc trong không gian có độ cao so với các mặt nền cơ sở?"
    },
    {
      key: "4",
      value: "Chi phí thí nghiệm chuyên ngành thuộc loại chi phí nào?"
    },
    {
      key: "5",
      value: "Khối lượng bộ phận công trình bị che khuất được lập trên:"
    },
    {
      key: "6",
      value: "Chi phí chuyển giao công nghệ thuộc loại chi phí nào?"
    }
  ];

  function showAll() {
    if (showALlNumber === 0) {
      setRows(rows.map(r => ({
        ...r,
        visible: false,
        words: r.words.map((w, idx) => ({
          ...w,
          visible: r.positionResult === idx ? true: w.visible,
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
  }

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

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
        </div>
        <div className={styles.logoContainer}>
          <Link
            href=""
            rel="noopener noreferrer"
          >
            Phát triển bởi{' '}
            <Image
              src="/vcc_logo.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              objectFit={'contain'}
              width={100}
              height={100 / 561 * 233}
              priority
            />
          </Link>
        </div>
      </div>

      <div className="">
        <Flashcards points={points}/>
      </div>
      <div className="w-full">
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
          Hiển thị đáp án
        </div>
        <div className="absolute right-0 top-0 h-full flex flex-col justify-center pb-[46px]">
          {rows.map((row, index) => {
            return (
              <div className="h-[46px] flex justify-center items-center cursor-pointer my-[2px]
              bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                   onClick={() => {
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
                <div className={`h-[46px] flex justify-center items-center cursor-pointer my-[2px] ${question === index ? 'bg-blue-500 border-white' : 'border-gray-500'}
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
        {finish && <div className="absolute left-0 top-0 h-full flex flex-col justify-center pb-[46px]
      flex justify-center">
          <div className="text-3xl font-bold">Đội chiến thắng là đội</div>
          <input
            className="border rounded my-2 text-2xl p-2 w-28"
            type={'number'}
            max={6}
            onChange={e => setTeam(e.target.value)}
          />
          <div
            className={`flex justify-center items-center cursor-pointer my-[2px] text-2xl
              bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
            onClick={() => {
              if (team) {
                setCongrat(true);
              }
            }}
          >Chúc mừng đội chiến thắng
          </div>
        </div>}
      </div>
      {congrat && <div
        className="absolute h-full w-full left-0 top-0 bg-black bg-opacity-70 text-white text-7xl flex items-center justify-center">
        Chúc mừng đội {team}
      </div>}
      {congrat && <Confetti
        width={width}
        height={height}
      >
      </Confetti>}

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
          setPoints={ setPoints}
        />}
      </AnimatePresence>
    </main>
  )
}
