import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { formatTime } from "../utils";
const P = styled.p`
  margin-top: 15px;
`;
const Para = styled.p`
  margin-top: 5px;
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
`;
const Pcorrect = styled.p`
  font-family: "PT Sans", sans-serif;
  color: #1e4d1e;
  font-size: 16px;
  padding-top: 10px;
  padding-left: 10px;
`;
const Strong = styled.strong`
  display: flex;
`;
const Section = styled.section<Props>`
  background-color: ${(props) => (props.IsCorrect ? "#e6ffee" : "#ffd6cc")};
  width: 900px;
`;
const Div = styled.div<Props>`
  background-color: ${(props) => props.choiceColor};
  font-weight: 100;
  color: black;
  border-radius: 2px;
  margin-top: 10px;
`;
const Button = styled.button`
  background-color: #ecced8;
  color: #0c0a0a;
  padding: 10px 30px;
  margin-right: 15px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  float: right;
`;
const Divhead = styled.div`
  background-color: #e8e8e8;
  height: 100px;
  margin-top: 100px;
  border-radius: 2px;
`;
const Ptime = styled.p`
  margin-left: 12px;
  margin-top: 3px;
`;
interface Props {
  IsCorrect?: any;
  choiceColor?: any;
}

const Modal = ({ results, data, onReset, time }: any) => {
  const [IsCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result: any, index: any) => {
      if (result.a === data[index]?.answer) {
        correct++;
      } else {
        console.log("errror occured", data[index]);
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Divhead>
        <Pcorrect>
          {" "}
          <strong>
            {" "}
            CorrectAnswers: {correctAnswers} of {data.length}
          </strong>
          <Button onClick={onReset}>Try again</Button>
        </Pcorrect>
        <Ptime>
          <strong>Total time taken: {formatTime(time)}</strong>
        </Ptime>
      </Divhead>
      <ul className="ans-card">
        {data.map((result: any, i: any) => (
          <li key={i}>
            <Section
              className="ans-section"
              IsCorrect={result.answer === results[i]?.a ? true : false}
            >
              <p>
                {results[i].a === "Skipped" ? (
                  <p className="ans-p">Skipped</p>
                ) : (
                  ""
                )}
              </p>
              <P className="card-title">
                <strong>
                  <b>{result.question}</b> {results[i]?.timeTaken}
                </strong>
              </P>
              {result.choices?.map((choice: any, j: any) => (
                <Div
                  key={j}
                  choiceColor={
                    result.answer === results[i].a &&
                    results[i]?.a === choice &&
                    choice == result.answer
                      ? "#dddddd "
                      : choice === result.answer
                      ? "#b3ffb3"
                      : results[i]?.a === choice && choice !== result.answer
                      ? "#ff4d4d"
                      : "transparent"
                  }
                >
                  {choice}
                </Div>
              ))}
            </Section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
