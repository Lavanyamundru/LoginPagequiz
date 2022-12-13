import React, { useState } from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #cae4f2;
  padding: 10px 100px 10px;
  border-radius: 10px;
  color: #141313;
  border-radius: 10px;
  height: 150vh;
  margin-top: 300px;
`;
const YourAnsP = styled.p`
  background-color: ${(props) => (props.IsCorrect ? "blue" : "red")};
  flex: 1;
  margin-top: 10px;
  height: 20px;
`;
const P = styled.p`
  margin-top: 15px;
`;
const Para = styled.p`
  margin-top: 15px;
`;
const CorrectAnsP = styled.p`
  background-color: #1e4d1e;
  font-size: 15px;
  flex: 1;
  margin-top: 15px;
  height: 20px;
`;

const Modal = ({ results, data }: any) => {
  const [IsCorrect, setIsCorrect] = useState(false);
  return (
    <Div>
      <div>
        <Para>Your answers</Para>
        
        <section>
          <ul>
            {results.map((result: any, i: any) => (
              <li key={i}>
                <P>
                  <strong>
                    <b>{result.q}</b>
                  </strong>
                </P>
                <YourAnsP
                  IsCorrect={result.a === data[i].answer ? true : false}
                >
                  Your answer: {result.a}
                </YourAnsP>
                {result.a !== data[i].answer && (
                  <CorrectAnsP>Correct answer: {data[i].answer}</CorrectAnsP>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Div>
  );
};

export default Modal;
