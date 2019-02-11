import React from 'react';

const Filter = (props) => {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" value={props.value} onChange={(event) => props.handleChange(event)}/>
      </div>
    );
}

export default Filter;
