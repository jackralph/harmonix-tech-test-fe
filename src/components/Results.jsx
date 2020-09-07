import React, { Component } from "react";
import * as api from "../utils/api";

class Results extends Component {
  state = {
    results: [],
    isLoading: true,
  };

  render() {
    const { isLoading } = this.state;
    const { wordComparisons } = this.state.results;

    if (isLoading) return <h1>Loading... </h1>;

    return (
      <tbody>
        {wordComparisons.map((result) => {
          const {
            _id,
            firstWord,
            secondWord,
            anagram,
            firstWordPalindrome,
            secondWordPalindrome,
            timeToComplete,
          } = result;
          return (
            <tr id={_id}>
              <td>{firstWord}</td>
              <td>{secondWord}</td>
              <td>
                {anagram
                  ? "These words are anagrams of each other"
                  : "These words are NOT anagrams of each other"}
              </td>
              <td>
                {firstWordPalindrome && `${firstWord} is a palindrome`}
                <br></br>
                {secondWordPalindrome && `${secondWord} is a palindrome`}
              </td>
              <td>{`${timeToComplete} seconds`}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  componentDidMount() {
    api.getResults().then((results) => {
      this.setState({ results, isLoading: false });
    });
  }
}

export default Results;
