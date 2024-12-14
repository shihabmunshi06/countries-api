import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { fetchDropdown } from '../../app/features/dropdownSlice';
import { useDispatch } from 'react-redux';

import { clearDropdown } from '../../app/features/dropdownSlice';

export default function Dropdown() {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');

  const regions = ['No filter', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleSelect = (region) => {
    setSelectedRegion(region);
    if (region === "No filter") {
      dispatch(clearDropdown())
    } else {
      dispatch(fetchDropdown(region))
    }
    setIsOpen(false);

  };

  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={toggleDropdown}>
        <span className="dropdown-label">
          {selectedRegion || 'Filter by region'}
        </span>
        <FontAwesomeIcon className="dropdown-arrow" icon={faChevronDown} />
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {regions.map((region, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(region)}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
