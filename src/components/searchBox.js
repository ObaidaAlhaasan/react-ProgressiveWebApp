import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {


  return (
    <div className="pa2" >
      <input type="search"
        name="search"
        id="search"
        className="pa3 ba bg-lightest-blue b--purple"
        placeholder="type Keyword"
        onChange={searchChange}
      />
    </div>
  )
}
export default SearchBox;