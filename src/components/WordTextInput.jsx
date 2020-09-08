import React from "react";

const WordTextInput = ({ firstWord, secondWord, handleInput }) => {
  return (
    <div>
      <div
        className='input-group input-group-sm mb-3'
        style={{ width: "40%", margin: "auto" }}
      >
        <div className='input-group-prepend'>
          <span className='input-group-text' id='inputGroup-sizing-sm'>
            First word
          </span>
        </div>
        <input
          type='text'
          name='firstWord'
          value={firstWord}
          className='form-control'
          aria-label='Small'
          aria-describedby='inputGroup-sizing-sm'
          onChange={handleInput}
        />
      </div>
      <div
        className='input-group input-group-sm mb-3'
        style={{ width: "40%", margin: "auto" }}
      >
        <div className='input-group-prepend'>
          <span className='input-group-text' id='inputGroup-sizing-sm'>
            Second word
          </span>
        </div>
        <input
          type='text'
          name='secondWord'
          value={secondWord}
          className='form-control'
          aria-label='Small'
          aria-describedby='inputGroup-sizing-sm'
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default WordTextInput;
