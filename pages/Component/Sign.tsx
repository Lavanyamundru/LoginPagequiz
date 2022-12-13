import { useEffect, useState } from "react";
import styled from "styled-components";
import validation from "./Validation";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: black;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: white;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;
const P =styled.p`
  color:red;
`

const Button=styled.button`
  background: white;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: black;
  border-radius: 2rem;
  cursor: pointer;
`;
const Input = styled.input`
  background:white;
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

interface Login {
  Email: string;
     password: string;
     Repeatpassword: string;
   }
export interface Errorlogin {
     Emailerror: string;
     passworderror: string;
   }

function App({ submitForm }: any) {
  const initialValues = {
    Email: "",
    password: "",
    Repeatpassword: "",
  };
  const [values, setValues] = useState<Login>(initialValues);
  const [errors, setErrors] = useState<Errorlogin>({
    Emailerror: "",
    passworderror: "",
  });
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    
  };
  const handleFormSubmit = () => {
    setErrors(validation(values));
    console.log("errors", errors);
    setDataIsCorrect(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  });
  return (
    <MainContainer>
      <WelcomeText>Login</WelcomeText>
      <InputContainer>
      <Input type="text" placeholder="Email"  name="Email" value={values.Email} onChange={handleChange} />
        {errors.Emailerror && <P> {errors.Emailerror}</P>}
       </InputContainer>
    
       <InputContainer>
        <Input type="password" placeholder="Password"  name="password" value={values.password} onChange={handleChange} />
        {errors?.passworderror && <P> {errors?.passworderror}</P>}
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleFormSubmit}>Sign in</Button>
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <ForgotPassword>
     
          Forgot Password?
       
        </ForgotPassword>
    </MainContainer>
  );
}


export default App;

