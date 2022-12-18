/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 40vw;
  background: black;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
`;
const H3 = styled.h3`
  font-weight: 600;
  color: #070707;
  margin-left: 20px;
  width: 90%;
  font-size: 20px;
  padding-top: 2rem;
`;
const RadioDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: inherit;
`;
const Label = styled.label`
  display: block;
  text-align: left;
  padding: 15px;
  margin-bottom: 5px;
  font-size: 20px;
`;
const Button = styled.button`
  background-color: #6d706d;
  color: #fff;
  padding: 10px 30px;
  margin-right: 15px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  float: right;
`;
const Input = styled.input`
  margin-left: 20px;
  margin-right: 10px;
`;
const Buttonskip = styled.button`
  background-color: #6d706d;
  color: #fff;
  padding: 10px 30px;
  margin-right: 10px;
  flex-direction: columns;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  float: right;
`;
const H4 =styled.h4`
   background-color: #dd5656;
  color: #fff;
  padding: 10px 30px;
  margin-right: 15px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  float: right;
  margin-top:30px;
`
const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
  answers,
}: any) => {

  let selected: any = "";
  const [error, setError] = useState("");
  const radiosWrapper = useRef<any>();
 
  const intervalRef = useRef<any>(null);
  const [timer, setTimer] = useState("00:00:00");

  function getTimeRemaining(endtime: any) {
    const total = Date.parse(endtime) - Date.parse(Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    const days = Math.floor((total / 1000) * 60 * 60 * 24);
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }
 
  function startTimer(deadline: any) {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      nextClickHandler(null);
      clearInterval(intervalRef.current);
    }
  }
  function clearTimer(endTime: any) {
    setTimer("00:00:10");
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endTime);
    }, 1000);
    intervalRef.current = id;
  }
  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  }
  useEffect(() => {
    const findCheckedInput =
      radiosWrapper?.current?.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [data, activeQuestion]);

  const changeHandler = (e: any) => {
 if (answers.filter((e: any) => e.id === activeQuestion).length > 0) {
      onAnswerUpdate((current: any) =>
        current.map((obj: any) => {
          if (obj.id === activeQuestion) {
            return {
              ...obj,
              q: data.question,
              a: e.target.value,
              id: activeQuestion,
            };
          }

          return obj;
        })
      );
    } else {
      onAnswerUpdate((prevState: any) => [
        ...prevState,
        { q: data.question, a: e.target.value, id: activeQuestion },
      ]);
    }
  };

  const nextClickHandler = (e: any) => {
    if (e != null) {
      clearInterval(intervalRef.current);
    } else {
      if (answers.filter((e: any) => e.id === activeQuestion).length < 1) {
        onAnswerUpdate((prevState: any) => [
          ...prevState,
          { q: data.question, a: "Skipped", id: activeQuestion },
        ]);
      }
    }
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
     
      selected = "";
    } else {
      onSetStep(3);
    }
  };
  const skipQuestion = (e: any) => {
    clearInterval(intervalRef.current);
    if (answers.filter((e: any) => e.id === activeQuestion).length < 1) {
      onAnswerUpdate((prevState: any) => [
        ...prevState,
        { q: data.question, a: "Skipped", id: activeQuestion },
      ]);
    }

    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
     
      selected = "";
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="card">
      <H4>{timer}</H4>
      <H3>
        {activeQuestion}
        {data.question}
      </H3>
      <RadioDiv ref={radiosWrapper}>
        {data.choices.map((choice: any, i: any) => (
          <Label key={i}>
            <Input
              type="radio"
              name="answer"
              value={choice}
              onChange={changeHandler}
            />
            {choice}
          </Label>
        ))}
      </RadioDiv>
      {error && <div>{error}</div>}
      <Button onClick={nextClickHandler}>Next</Button>
      <Buttonskip onClick={skipQuestion}>Skip</Buttonskip>
    </div>
  );
};

export default Question;
