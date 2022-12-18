import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 40vh;
  width: 30vw;
  background: black;
  border-radius: 10px;
  color: #ffffff;
`;
const H4 = styled.h4`
  font-weight: 600;
  color: #e2dddd;
  margin-top: 25px;
  width: 100%;
  margin-right: -45px;
`;
const P = styled.p`
  font-weight: 600;
  color: #ded8d8;
  margin-top: 25px;
  width: 100%;
  margin-right: -45px;
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

const End = ({ onAnswersCheck, showModal }: any) => {
  return (
    <>
      <div>
        {!showModal && (
          <Div>
            <H4>You have completed the quiz!</H4>
            <P>Thank you!</P>

            <Button onClick={onAnswersCheck}>Check your answers</Button>
          </Div>
        )}
      </div>
    </>
  );
};

export default End;
