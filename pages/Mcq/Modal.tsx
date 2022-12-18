import React, { useEffect, useState } from "react";
import styled from "styled-components";

const P = styled.p`
  margin-top: 15px;
`;
const Para = styled.p`
  margin-top: 5px;
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
`;
const Pcorrect = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #1e4d1e;
  font-size: 20px;
`;
const Strong = styled.strong`
  display: flex;
`;
const Section = styled.section`
  background-color: ${(props) => (props.IsCorrect ? "#e6ffee" : "#ffd6cc")};
  width: 900px;
`;
const Div = styled.div`
  background-color: ${(props) => props.choiceColor};
  font-weight: 100;
  color: black;
  border-radius: 2px;
  margin-top: 10px;
`;

const Modal = ({ results, data }: any) => {
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
      <Pcorrect>
        {" "}
        CorrectAnswers: {correctAnswers} of {data.length}
      </Pcorrect>

      <ul className="ans-card">
        {data.map((result: any, i: any) => (
          <li key={i}>
            <Section
              className="ans-section"
              IsCorrect={result.answer === results[i].a ? true : false}
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
                  <b>{result.question}</b>
                </strong>
              </P>
              {result.choices?.map((choice: any, j: any) => (
                <Div
                  key={j}
                  choiceColor={
                    result.answer === results[i].a &&
                    results[i].a === choice &&
                    choice == result.answer
                      ? "#dddddd "
                      : choice === result.answer
                      ? "#b3ffb3"
                      : results[i].a === choice && choice !== result.answer
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
