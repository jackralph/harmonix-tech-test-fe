import React from "react";

const WordSelectInput = ({ handleChange }) => {
  return (
    <div>
      <select
        className='form-control form-control-sm'
        style={{ width: "40%", margin: "auto" }}
        onChange={handleChange}
      >
        <option value=''>---select comparison---</option>
        <option value='anagram'>Anagram</option>
        <option value='palindrome'>Palindrome</option>
      </select>
    </div>
  );
};

export default WordSelectInput;
