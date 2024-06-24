import React from 'react'
import { useEffect, useState } from 'react';

const Search = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        if (searchTerm.trim() !== '') {
          const results = data.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(results);
        } else {
          setSearchResults([]);
        }
      }, 300); // Delay in milliseconds
  
      return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, data]);
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleChange} 
        />
        <ul>
          {searchResults.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Search
