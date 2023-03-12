import {motion} from "framer-motion";
import Backdrop from "./backdrop";
import {Formik} from 'formik';
import styles from './modal.module.css';
import get from 'lodash.get';

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


const Modal = ({handleClose, text, config, points, setPoints, numberOfTeam = 6}: any) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`modal orange-gradient ${styles.modalCustom} z-20`}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col items-center">
          <Formik
            initialValues={points}
            onSubmit={(values, {setSubmitting}) => {
              setPoints(values);
              handleClose();
            }}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
              handleReset,
                setValues,
                isSubmitting,
                /* and other goodies */
              }) => (
              <form onSubmit={handleSubmit} className="flex flex-col items-center my-2">
                {Array.from(Array(numberOfTeam).keys()).map(i => {
                  const index = i+ 1;
                  return (
                    <div className="flex items-center space-x-4 my-2 font-semibold">
                      <div>Điểm team {index}</div>
                      <input
                        type="number"
                        disabled
                        name={`team${index}`}
                        className="rounded px-2 py-1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={get(values, `team${index}`)}
                      />
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setFieldValue(`team${index}`, get(values, `team${index}`) + config[0])
                        }}
                      >
                        Thêm điểm
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setFieldValue(`team${index}`, get(values, `team${index}`) - config[1] >=0 ? get(values, `team${index}`) - config[1] : 0)
                        }}
                      >
                        Trừ điểm
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setFieldValue(`team${index}`, get(values, `team${index}`) + config[2])
                        }}
                      >
                        Trả lời đúng câu hỏi hàng dọc
                      </div>
                    </div>
                  )
                }) }
                {/*<div className="flex items-center space-x-4 my-2 font-semibold">*/}
                {/*  <div>Điểm team 2</div>*/}
                {/*  <input*/}
                {/*    type="number"*/}
                {/*    disabled*/}
                {/*    name="team2"*/}
                {/*    className="rounded px-2 py-1"*/}
                {/*    onChange={handleChange}*/}
                {/*    onBlur={handleBlur}*/}
                {/*    value={values.team2}*/}
                {/*  />*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team2", values.team2 + config[0])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Thêm điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team2", values.team2 - config[1] >=0 ? values.team2 - config[1] : 0)*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trừ điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team2", values.team2 + config[2])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trả lời đúng câu hỏi hàng dọc*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="flex items-center space-x-4 my-2 font-semibold">*/}
                {/*  <div>Điểm team 3</div>*/}
                {/*  <input*/}
                {/*    type="number"*/}
                {/*    disabled*/}
                {/*    name="team3"*/}
                {/*    className="rounded px-2 py-1"*/}
                {/*    onChange={handleChange}*/}
                {/*    onBlur={handleBlur}*/}
                {/*    value={values.team3}*/}
                {/*  />*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team3", values.team3 + config[0])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Thêm điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team3", values.team3 - config[1] >=0 ? values.team3 - config[1] : 0)*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trừ điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team3", values.team3 + config[2])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trả lời đúng câu hỏi hàng dọc*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="flex items-center space-x-4 my-2 font-semibold">*/}
                {/*  <div>Điểm team 4</div>*/}
                {/*  <input*/}
                {/*    type="number"*/}
                {/*    disabled*/}
                {/*    name="team4"*/}
                {/*    className="rounded px-2 py-1"*/}
                {/*    onChange={handleChange}*/}
                {/*    onBlur={handleBlur}*/}
                {/*    value={values.team4}*/}
                {/*  />*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team4", values.team4 + config[0])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Thêm điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team4", values.team4 - config[1] >=0 ? values.team4 - config[1] : 0)*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trừ điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team4", values.team4 + config[2])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trả lời đúng câu hỏi hàng dọc*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="flex items-center space-x-4 my-2 font-semibold">*/}
                {/*  <div>Điểm team 5</div>*/}
                {/*  <input*/}
                {/*    type="number"*/}
                {/*    disabled*/}
                {/*    name="team5"*/}
                {/*    className="rounded px-2 py-1"*/}
                {/*    onChange={handleChange}*/}
                {/*    onBlur={handleBlur}*/}
                {/*    value={values.team5}*/}
                {/*  />*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team5", values.team5 + config[0])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Thêm điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team5", values.team5 - config[1] >=0 ? values.team5 - config[1] : 0)*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trừ điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team5", values.team5 + config[2])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trả lời đúng câu hỏi hàng dọc*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="flex items-center space-x-4 my-2 font-semibold">*/}
                {/*  <div>Điểm team 6</div>*/}
                {/*  <input*/}
                {/*    type="number"*/}
                {/*    disabled*/}
                {/*    name="team6"*/}
                {/*    className="rounded px-2 py-1"*/}
                {/*    onChange={handleChange}*/}
                {/*    onBlur={handleBlur}*/}
                {/*    value={values.team6}*/}
                {/*  />*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team6", values.team6 + config[0])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Thêm điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team6", values.team6 - config[1] >=0 ? values.team6 - config[1] : 0)*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trừ điểm*/}
                {/*  </div>*/}
                {/*  <div*/}
                {/*    className="cursor-pointer"*/}
                {/*    onClick={() => {*/}
                {/*      setFieldValue("team6", values.team6 + config[2])*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Trả lời đúng câu hỏi hàng dọc*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="flex space-x-4">
                  <button onClick={(e) => {
                    e.stopPropagation()
                    handleReset()
                  }}>Reset</button>
                  <button onClick={(e) => handleSubmit()}>Submit</button>
                  <button onClick={handleClose}>Close</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </motion.div>
    </Backdrop>
  );
};


export default Modal;