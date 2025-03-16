import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setDropDown, clearDropdown } from '../../../app/features/dropdownSlice';

import DownIcon from './components/DownIcon';

import "./dropdown.scss"

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
      dispatch(setDropDown(region))
    }
    setIsOpen(false);

  };

  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={toggleDropdown}>
        <span className="dropdown-label">
          {selectedRegion || 'Filter by region'}
        </span>
        <DownIcon />
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
