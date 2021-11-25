import React from "react";
import AllInputs from "./AllInputs";

const Form = () => {
  return (
    <form action="" className="my-form">
      <AllInputs></AllInputs>
      <br />
      <button type="submit" className="button">
        Claim your free trial
      </button>
      <p className="form-agreement">
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
