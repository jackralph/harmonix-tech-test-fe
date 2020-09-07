import React from "react";
import Results from "./Results";

const Table = () => {
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>First word</th>
            <th scope='col'>Second word</th>
            <th scope='col'>Anagram?</th>
            <th scope='col'>Palindrome?</th>
            <th scope='col'>Time to complete</th>
          </tr>
        </thead>
        <Results />
      </table>
    </div>
  );
};

export default Table;
