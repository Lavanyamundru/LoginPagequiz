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
const H2 = styled.h2`
  font-weight: 600;
  color: #f4f1f1;
  margin-top: 25px;
  width: 80%;
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
  margin: auto;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`;
const Input = styled.input`
  margin-left: 20px;
  margin-right: 10px;
`;

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}: any) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef<any>();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper?.current?.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e: any) => {
    setSelected(e.target.value);
  };

  const nextClickHandler = (e: any) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState: any) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <Div>
      <H2>{data.question}</H2>
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
    </Div>
  );
};

export default Question;
