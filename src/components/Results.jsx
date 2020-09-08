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

    if (isLoading)
      return (
        <>
          <td></td>
          <td></td>
          <th>Loading comparison results... </th>
          <td></td>
          <td></td>
        </>
      );

    return (
      <tbody>
        {wordComparisons.map((result) => {
          const {
            _id,
            firstWord,
            secondWord,
            typeOfTest,
            anagram,
            firstWordPalindrome,
            secondWordPalindrome,
            timeToComplete,
          } = result;
          return (
            <tr key={_id}>
              <td>{firstWord}</td>
              <td>{secondWord}</td>
              <td>{typeOfTest}</td>
              {typeOfTest === "palindrome" ? (
                <td>
                  {" "}
                  {firstWordPalindrome && secondWordPalindrome
                    ? `${firstWord} AND ${secondWord} are both palindromes`
                    : (firstWordPalindrome && `${firstWord} is a palindrome`) ||
                      (secondWordPalindrome && `${secondWord} is a palindrome`)}
                </td>
              ) : (
                <td>
                  {anagram && `${firstWord} is an anagram of ${secondWord}`}
                </td>
              )}
              <td>{`${timeToComplete} seconds`}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  componentDidMount() {
    const { orderDesc } = this.props;
    api.getResults(orderDesc).then((results) => {
      this.setState({ results, isLoading: false });
    });
  }

  componentDidUpdate(previousProps) {
    const { orderDesc } = this.props;
    if (this.props !== previousProps) {
      api.getResults(orderDesc).then((results) => {
        this.setState({ results });
      });
    }
  }
}

export default Results;
