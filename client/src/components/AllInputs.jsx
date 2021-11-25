import React from "react";
import InputVariables from "../assets/InputVariables";

const AllInputs = () => {
  return (
    <>
      {InputVariables.map((input) => {
        const { name, type, id, placeholder } = input;

        return (
          <input
            key={id}
            name={name}
            type={type}
            placeholder={placeholder}
            id={id}
          ></input>
        );
      })}
    </>
  );
};

export default AllInputs;
