import React, { useState, useEffect } from 'react';

// ----------------------------------------------------------------------------------
// --------------------------------- SEARCH BAR -------------------------------------
// ----------------------------------------------------------------------------------

function SearchBar({ repos, setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Function for handling search input
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  // UseEffect that handles filtering repositories by its name
  useEffect(() => {
    const results = repos.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results)
  }, [searchTerm, repos]);

  return (
    <div>
      <input
        className='text-black'
        placeholder='Search by repo name'
        onChange={handleInputChange}
        type='search'
      />
    </div>
  );
}

export default SearchBar;