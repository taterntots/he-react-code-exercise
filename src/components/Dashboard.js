import React, { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENTS
import RepoCard from './RepoCard';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

// ----------------------------------------------------------------------------------
// --------------------------------- DASHBOARD --------------------------------------
// ----------------------------------------------------------------------------------

function Dashboard() {
  const [repos, setRepos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [sortType, setSortType] = useState('');

  // UseEffect to hit the github repositories API and set data to state
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=tetris+language:assembly&${sortType}&order=desc`,
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }).then(res => {
      setRepos(res.data.items);
    });
  }, [sortType])

  return (
    <>
      <SearchBar repos={repos} setSearchResults={setSearchResults} setSortType={setSortType} />
      {/* <FilterBar setSortType={setSortType} /> */}
      <div className='px-8 pb-8 pt-4 grid gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {searchResults.map(i =>
          <RepoCard key={i.id} data={i} />
        )}
      </div>
    </>
  );
}

export default Dashboard;