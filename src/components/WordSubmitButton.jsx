import React from "react";

const WordSubmitButton = ({ handleSubmit }) => {
  return (
    <div>
      <button
        type='submit'
        className='btn btn-outline-secondary'
        style={{ margin: "10px" }}
        onClick={handleSubmit}
      >
        Submit comparison
      </button>
    </div>
  );
};

export default WordSubmitButton;
