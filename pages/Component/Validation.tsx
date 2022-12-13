import { Errorlogin } from "./Sign";

const validation = (values: any) => {
  const errors = {} as Errorlogin;
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.Email) {
    errors.Emailerror = "email is required!";
  } else if (!regex.test(values.Email)) {
    errors.Emailerror = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.passworderror = "password is required!";
  } else if (values.password.length < 4) {
    errors.passworderror = "password must be more than 4 characters";
  }

  return errors;
};

export default validation;
