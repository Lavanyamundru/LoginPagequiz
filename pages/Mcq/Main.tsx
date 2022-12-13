import React, { useState, useEffect } from 'react';
import Start from './Start';
import Question from './Question';
import End from './End';
import Modal from './Modal';
import quizData from '../quiz.json';
const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
const quizStartHandler = () => {
    setStep(2);
  }
return (
    <div >
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        showModal={showModal}
        onAnswersCheck={() => setShowModal(true)}
      />}

      {showModal && <Modal
        results={answers}
        data={quizData.data}
      />}
    </div>
  );
}

export default App;
