import React, { useState} from "react";
import Start from "./Start";
import Question from "./Question";
import End from "./End";
import Modal from "./Modal";
import quizData from "../quiz.json";
let interval: any;
const App = () => {
  const [step, setStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const setactiveQue = (q: any) => {
    setCurrentQuestionIndex(q);
  };

  return (
    <div>
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={quizData.data[currentQuestionIndex]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.data.length}
          activeQuestion={currentQuestionIndex}
          onSetActiveQuestion={setactiveQue}
          onSetStep={setStep}
          time={time}
          answers={answers}
        />
      )}
      {step === 3 && (
        <End
          showModal={showModal}
          onAnswersCheck={() => setShowModal(true)}
          time={time}
        />
      )}
{showModal && <Modal results={answers} data={quizData.data} />}
    </div>
  );
};

export default App;
