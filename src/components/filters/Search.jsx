import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { fetchquery } from '../../app/features/searchSlice';
import { useDispatch } from 'react-redux';


export default function Search() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('');


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchquery(query))
  };

  return (
    <div className="search">
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-input"
          value={query}
          onChange={handleChange}
          placeholder="Search for a country..."
        />
      </form>
    </div>
  );
}

