import React from "react";

const OrderByCheckbox = ({ changeOrder, orderDesc }) => {
  return (
    <div className='form-check'>
      <input
        className='form-check-input'
        type='checkbox'
        checked={orderDesc}
        value={orderDesc}
        onChange={changeOrder}
      />
      <label className='form-check-label'>
        Order descending by Time to complete
      </label>
    </div>
  );
};

export default OrderByCheckbox;
