import React, { Component } from "react";
import * as api from "../utils/api";

class Results extends Component {
  state = {
    results: [],
    isLoading: true,
  };

  render() {
    if (this.state.isLoading) return <h1>Loading... </h1>;
    this.state.results.wordComparisons.map((result) => {
      console.log(result);
    });
    return (
      <tbody>
        {this.state.results.wordComparisons.map((result) => {
          return (
            <tr>
              <td>{result.firstWord}</td>
              <td>{result.secondWord}</td>
              <td>
                {result.anagram
                  ? "These words are anagrams of each other"
                  : "These words are not anagrams of each other"}
              </td>
              <td>
                {result.firstWordPalindrome &&
                  `${result.firstWord} is a palindrome`}
                /
                {result.firstWordPalindrome &&
                  `${result.firstWord} is a palindrome`}
              </td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  componentDidMount() {
    api.getResults().then((results) => {
      this.setState({ results, isLoading: false });
      console.log(this.state);
    });
  }
}

export default Results;
