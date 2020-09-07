import React, { Component } from "react";
import Results from "./Results";

class Table extends Component {
  state = {
    orderDesc: true,
  };

  changeOrder = () => {
    this.setState({ orderDesc: !this.state.orderDesc });
  };

  render() {
    return (
      <div>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='checkbox'
            value={this.state.order}
            onChange={this.changeOrder}
          />
          <label class='form-check-label'>
            Order descending by Time to complete
          </label>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>First word</th>
              <th scope='col'>Second word</th>
              <th scope='col'>Anagram?</th>
              <th scope='col'>Palindrome?</th>
              <th scope='col'>Time to complete</th>
            </tr>
          </thead>
          <Results orderDesc={this.state.orderDesc} />
        </table>
      </div>
    );
  }
}

export default Table;
