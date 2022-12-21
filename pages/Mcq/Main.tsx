/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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
  const [selectedCategoryIndex, setSelectedCategory] = useState(0);
  const [SelectedCategoryData, setSelectedCategoryData] = useState<any>([]);
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
    setSelectedCategoryData(quizData.data[selectedCategoryIndex]?.Questions);
  }, [step, selectedCategoryIndex]);
  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const setactiveQue = (q: any) => {
    setCurrentQuestionIndex(q);
  };
  const resetClickHandler = () => {
    setactiveQue(0);
    setAnswers([]);
    setStep(1);
    setShowModal(false);
  };
  return (
    <div>
      {step === 1 && (
        <Start
          onQuizStart={quizStartHandler}
          data={quizData.data}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {step === 2 && (
        <Question
          data={SelectedCategoryData[currentQuestionIndex]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={SelectedCategoryData.length}
          activeQuestion={currentQuestionIndex}
          onSetActiveQuestion={setactiveQue}
          onSetStep={setStep}
          answers={answers}
        />
      )}
      {step === 3 && (
        <End showModal={showModal} onAnswersCheck={() => setShowModal(true)} />
      )}
      {showModal && (
        <Modal
          results={answers}
          data={SelectedCategoryData}
          onReset={resetClickHandler}
          time={time}
        />
      )}
    </div>
  );
};

export default App;
