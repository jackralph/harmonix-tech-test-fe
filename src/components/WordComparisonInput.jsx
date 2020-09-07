import React, { Component } from "react";
import * as api from "../utils/api";

class WordComparisonInput extends Component {
  state = {
    firstWord: "",
    secondWord: "",
  };

  handleSubmit = () => {
    const { firstWord, secondWord } = this.state;
    if (firstWord.length === 0 || secondWord.length === 0) {
      alert("Both fields are required for comparison");
    } else if (
      !/^[A-Za-z]+$/.test(firstWord) ||
      !/^[A-Za-z]+$/.test(secondWord)
    ) {
      alert(
        "Only single words are permitted, no spaces, numbers or special characters are allowed"
      );
    } else {
      api.newComparison(firstWord, secondWord);
      this.setState({ firstWord: "", secondWord: "" });
    }
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstWord, secondWord } = this.state;
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
            onChange={this.handleInput}
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
            onChange={this.handleInput}
          />
        </div>
        <button
          type='submit'
          className='btn btn-outline-secondary'
          style={{ margin: "10px" }}
          onClick={this.handleSubmit}
        >
          Submit comparison
        </button>
      </div>
    );
  }
}

export default WordComparisonInput;
