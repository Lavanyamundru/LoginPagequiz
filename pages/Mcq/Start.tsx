import React, { useState } from "react";
import styled from "styled-components";

// const Div = styled.div`
//   /* display: flex; */
//   align-items: center;
//   flex-direction: column;
//   height: 300px;
//   width: 750px;
//   background: black;
//   border-radius: 10px;
//   color: #ffffff;
//   /* margin-top: 5rem;
//   margin: auto; */
// `;
const Button = styled.button`
  background-color: #6d706d;
  color: #fff;
  padding: 10px 30px;
  /* margin: auto; */
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  margin-top:30px;
`;
const H2 = styled.h2`
  margin: auto;
  font-size:25px;
`;
const P=styled.p`
  font-size:20px;
  margin-top:5px;
`
const Div = styled.div`
   width: 230px;
    padding:70px;
    border-radius: 6px;
    height: 175px;
    background: #626161 0% 0% no-repeat padding-box;
   border:1px solid black;
    margin-top: 20px;
    opacity: 1;
    color:white;
    margin-left:20px;
    display:grid;
    font-size:20px;
`;
const Input = styled.input`
  margin-left: 20px;
  margin-right: 10px;
`;
const Label=styled.label`
    width:290px;
    margin-left: 10px;
    display:grid;
`
const Start = ({ onQuizStart, data, setSelectedCategory }: any) => {
  return (
    <div className="card">
     <div className="card-container">
          {data?.map((item: any, i: any) => (
              <Label key={i} >
                <Div>
                <label
                  onClick={() => {
                    setSelectedCategory(i);
                  }}
                >
                  {item.id}
                </label>
                </Div>
              </Label>
              
            ))}
     </div>
     <div className="sub-menu">
     <H2>Start the quiz</H2>
      <P>Good luck!</P>
      <Button onClick={onQuizStart}>Start</Button>
     </div>
    </div>
  );
};

export default Start;
