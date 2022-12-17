import React, { useState, useEffect } from "react";
import Start from "./Start";
import Question from "./Question";
import End from "./End";
import Modal from "./Modal";
import quizData from "../quiz.json";
let interval:any;
const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  // useEffect(() => {
  //   if(step === 3) {
  //     clearInterval(interval);
  //   }
  // }, [step]);
  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };
  const setactiveQue = (q: any) => {
    setActiveQuestion(q);
  };

  return (
    <div>
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setactiveQue }
          onSetStep={setStep}
          time={time}
        />
      )}
      {step === 3 && (
        <End showModal={showModal} onAnswersCheck={() => setShowModal(true)}   time={time}/>
      )}

      {showModal && <Modal results={answers} data={quizData.data} />}
    </div>
  );
};

export default App;
