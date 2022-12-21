import React from 'react';
import styled from 'styled-components';
const Div= styled.div`
    display: flex;
  align-items: center;
  flex-direction: column;
  height: 40vh;
  width: 30vw;
  background: black;
  border-radius: 10px;
  color: #ffffff;
  margin-top:5rem;
  margin:auto;
`
const Button=styled.button`
     background-color: #6d706d;
    color:#fff;
    padding: 10px 30px;
    margin:auto;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
`
const H2=styled.h2`
    margin:auto;
`

function selectedCategory(){

}
// const categories=['data','mathematics']
const Start = ({ onQuizStart }:any) => {
  return(
  <Div>
    {/* <h1>Select the category :</h1>
    <ol>{
        categories.map((item)=>(
          <>
            <li id={item} >{item}</li>
          </>
        ))
      }
    </ol> */}
  <H2>Start the quiz</H2>
  <p >Good luck!</p>
  <Button onClick={onQuizStart}>Start</Button>
  </Div>
 
  );
}

export default Start;