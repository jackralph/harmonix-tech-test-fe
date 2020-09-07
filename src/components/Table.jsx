import React, { Component } from "react";
import Results from "./Results";
import TableHead from "./TableHead";
import OrderByCheckbox from "./OrderByCheckbox";
import WordComparisonInput from "./WordComparisonInput";

class Table extends Component {
  state = {
    orderDesc: true,
    currentFirstWord: "",
    currentSecondWord: "",
  };

  changeOrder = () => {
    this.setState({ orderDesc: !this.state.orderDesc });
  };

  newSubmission = (firstWord, secondWord) => {
    this.setState({
      currentFirstWord: firstWord,
      currentSecondWord: secondWord,
    });
  };

  render() {
    const { orderDesc, currentFirstWord, currentSecondWord } = this.state;
    return (
      <div>
        <OrderByCheckbox changeOrder={this.changeOrder} orderDesc={orderDesc} />
        <WordComparisonInput newSubmission={this.newSubmission} />
        <table className='table'>
          <TableHead />
          <Results
            orderDesc={orderDesc}
            currentFirstWord={currentFirstWord}
            currentSecondWord={currentSecondWord}
          />
        </table>
      </div>
    );
  }
}

export default Table;
