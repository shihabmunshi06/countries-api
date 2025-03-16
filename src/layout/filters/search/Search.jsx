import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSearch, clearSearch } from '../../../app/features/searchSlice';

import SearchIcon from './components/Search';

import "./search.scss"

export default function Search() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('');


  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      dispatch(setSearch(query))
    } else if (query.length == 0) {
      dispatch(clearSearch)
    } else {
      dispatch(clearSearch())
    }
  };

  return (
    <div className="search">
      <SearchIcon />
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

