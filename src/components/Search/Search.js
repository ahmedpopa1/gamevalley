import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { IoCloseCircle } from 'react-icons/io5';
import './Search.css';

const Search = ({ value, onChange, onClear }) => {
  return (
    <div className="InputContainer">
      <IoSearch className="search-icon" />
      <input
        className="input1"
        type="search"
        placeholder="Search for a car..."
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoCloseCircle className="clear-icon" onClick={onClear} />
      )}
    </div>
  );
};

export default Search;
