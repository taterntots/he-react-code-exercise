import React, { useState, useEffect } from 'react';

// ----------------------------------------------------------------------------------
// --------------------------------- SEARCH BAR -------------------------------------
// ----------------------------------------------------------------------------------

function SearchBar({ repos, setSearchResults, setSortType }) {
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
    <div className='flex justify-between p-4 bg-searchbar'>
      <input
        className='w-1/3 p-2 rounded-md text-black'
        placeholder='Search by repo name'
        onChange={handleInputChange}
        type='search'
      />
      <div>
        <button
          className='p-4 mr-6 bg-cardbanner hover:bg-sitebackground rounded-md'
          onClick={() => setSortType('')}
        >
          Best Match
        </button>
        <button
          className='p-4 bg-cardbanner hover:bg-sitebackground rounded-md'
          onClick={() => setSortType('sort=stars')}
        >
          Total Stars
        </button>
      </div>
    </div>
  );
}

export default SearchBar;