import React from 'react'
import './Filter.css'
function Filter({ product, Sort, Size, setSort, setSize }) {
  return (
    <div className='filter'>
    
      <div>
        <p>Order</p>
        <select
          name=""
          id=""
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="HIGH">HIGH</option>
          <option value="LOW"> LOW</option>
        </select>
        <p>Price</p>
      </div>
      <div>
        <p>Filter</p>
        <select
          name=""
          id=""
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          <option value="xl">XL</option>
          <option value="xxl"> XXL</option>
          <option value="sm">S</option>
        </select>
        {console.log(Size)}
      </div>
    </div>
  );
}

export default Filter
