import React, { Component } from "react";
import * as api from "../utils/api";
import WordTextInput from "./WordTextInput";
import WordSelectInput from "./WordSelectInput";
import WordSubmitButton from "./WordSubmitButton";

class WordComparisonInput extends Component {
  state = {
    firstWord: "",
    secondWord: "",
    typeOfTest: "",
  };

  handleSubmit = () => {
    const { firstWord, secondWord, typeOfTest } = this.state;
    const { newSubmission } = this.props;
    if (
      firstWord.length === 0 ||
      secondWord.length === 0 ||
      typeOfTest.length === 0
    ) {
      alert("All fields are required for comparison");
    } else if (
      !/^[A-Za-z]+$/.test(firstWord) ||
      !/^[A-Za-z]+$/.test(secondWord)
    ) {
      alert(
        "Only single words are permitted, no spaces, numbers or special characters are allowed"
      );
    } else {
      api.newComparison(firstWord, secondWord, typeOfTest).then(() => {
        newSubmission(firstWord, secondWord);
        this.setState({ firstWord: "", secondWord: "" });
      });
    }
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ typeOfTest: value });
  };

  render() {
    const { firstWord, secondWord } = this.state;
    return (
      <div>
        <WordTextInput
          firstWord={firstWord}
          secondWord={secondWord}
          handleInput={this.handleInput}
        />
        <WordSelectInput handleChange={this.handleChange} />
        <WordSubmitButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default WordComparisonInput;
