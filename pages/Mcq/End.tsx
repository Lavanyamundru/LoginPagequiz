import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 40vh;
  width: 30vw;
  background: black;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
`;
const H4 = styled.h4`
  font-weight: 600;
  color: #f4f1f1;
  margin-top: 25px;
  width: 100%;
  margin-right: 15px;
`;
const P = styled.p`
  font-weight: 600;
  color: #f4f1f1;
  margin-top: 25px;
  width: 100%;
  margin-right: 15px;
`;
const Button = styled.button`
  background-color: #6d706d;
  color: #fff;
  padding: 10px 30px;
  margin-top: 25px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`;

const End = ({ results, data, onAnswersCheck, showModal,time }: any) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result: any, index: any) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
   <>
    {
        !showModal && 
    <Div>
<H4>You have completed the quiz!</H4>
<P>Thank you!</P>
<Button onClick={onAnswersCheck}>Check your answers {showModal}</Button>
</Div>
}
</>
  );
};

export default End;
