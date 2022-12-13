import React from "react";
import Start from "../Mcq/Start";
import Main from'../Mcq/Main'


import Sign from "./Sign";
import { useState } from "react";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return <>{!formIsSubmitted ? <Sign submitForm={submitForm} /> : <Main/>}</>;
};

export default Form;
