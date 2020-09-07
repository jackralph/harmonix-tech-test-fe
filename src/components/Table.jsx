import React, { Component } from "react";
import Results from "./Results";
import TableHead from "./TableHead";
import OrderByCheckbox from "./OrderByCheckbox";
import * as api from "../utils/api";

class Table extends Component {
  state = {
    orderDesc: true,
    firstWord: "",
    secondWord: "",
  };

  changeOrder = () => {
    this.setState({ orderDesc: !this.state.orderDesc });
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    const { firstWord, secondWord } = this.state;
    api.newComparison(firstWord, secondWord);
    this.setState({ firstWord: "", secondWord: "" });
  };

  render() {
    const { orderDesc, firstWord, secondWord } = this.state;
    return (
      <div>
        <OrderByCheckbox changeOrder={this.changeOrder} orderDesc={orderDesc} />
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
          class='btn btn-outline-secondary'
          style={{ margin: "10px" }}
          onClick={this.handleSubmit}
        >
          Secondary
        </button>
        <table className='table'>
          <TableHead />
          <Results orderDesc={orderDesc} />
        </table>
      </div>
    );
  }
}

export default Table;
