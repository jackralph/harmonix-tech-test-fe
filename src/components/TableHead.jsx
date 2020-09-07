import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope='col'>First word</th>
        <th scope='col'>Second word</th>
        <th scope='col'>Anagram?</th>
        <th scope='col'>Palindrome?</th>
        <th scope='col'>Time to complete</th>
      </tr>
    </thead>
  );
};

export default TableHead;
