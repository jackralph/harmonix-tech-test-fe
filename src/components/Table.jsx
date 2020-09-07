import React, { Component } from "react";
import Results from "./Results";
import TableHead from "./TableHead";
import OrderByCheckbox from "./OrderByCheckbox";

class Table extends Component {
  state = {
    orderDesc: true,
  };

  changeOrder = () => {
    this.setState({ orderDesc: !this.state.orderDesc });
  };

  render() {
    const { orderDesc } = this.state;
    return (
      <div>
        <OrderByCheckbox changeOrder={this.changeOrder} orderDesc={orderDesc} />
        <table className='table'>
          <TableHead />
          <Results orderDesc={orderDesc} />
        </table>
      </div>
    );
  }
}

export default Table;
