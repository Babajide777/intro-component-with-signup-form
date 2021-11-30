import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstDisplay, setFirstDisplay] = useState("");
  const [lastDisplay, setLastDisplay] = useState("");
  const [emailDisplay, setEmailDisplay] = useState("");
  const [passwordDisplay, setPasswordDisplay] = useState("");
  const [hide1, setHide1] = useState("hide");
  const [hide2, setHide2] = useState("hide");
  const [hide3, setHide3] = useState("hide");
  const [hide4, setHide4] = useState("hide");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHide1("hide");
    setHide2("hide");
    setHide3("hide");
    setHide4("hide");
    if (firstName === "") {
      setHide1("show");
      setFirstDisplay("First Name cannot be empty");
    }
    if (lastName === "") {
      setHide2("show");
      setLastDisplay("Last Name cannot be empty");
    }
    if (email) {
      if (!validateEmail(email)) {
        setHide3("show");
        setEmailDisplay("Looks like this is not an email");
      }
      if (email === "") {
        setHide3("show");
        setEmailDisplay("Looks like this is not an email");
      }
    }
    if (password === "") {
      setHide4("show");
      setPasswordDisplay("Password cannot be empty");
    }
  };
  return (
    <form action="" className="my-form">
      <input
        name="firstName"
        type="text"
        id="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
      ></input>
      <div className={hide1}>{firstDisplay}</div>
      <img className={hide1} src="/images/icon-error.svg" alt="" />

      <input
        name="lastName"
        type="text"
        id="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={handleChange}
      ></input>
      <div className={hide2}>{lastDisplay}</div>
      <img className={hide2} src="/images/icon-error.svg" alt="" />

      <input
        name="email"
        type="email"
        id="email"
        placeholder="Email Address"
        value={email}
        onChange={handleChange}
      ></input>
      <div className={hide3}>{emailDisplay}</div>
      <img className={hide3} src="/images/icon-error.svg" alt="" />

      <input
        name="password"
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      ></input>
      <div className={hide4}>{passwordDisplay}</div>
      <img className={hide4} src="/images/icon-error.svg" alt="" />

      <button type="submit" className="button" onClick={handleSubmit}>
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
