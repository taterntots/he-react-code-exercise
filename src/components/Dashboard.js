import React, { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENTS
import RepoCard from './RepoCard';
import SearchBar from './SearchBar';

// ----------------------------------------------------------------------------------
// --------------------------------- DASHBOARD --------------------------------------
// ----------------------------------------------------------------------------------

function Dashboard() {
  const [repos, setRepos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // UseEffect to hit the github repositories API and set data to state
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc`,
      headers: {
        Accept: 'application/vnd.github.v3+json'
      },
    }).then(res => {
      setRepos(res.data.items);
    });
  }, [])

  return (
    <>
      <SearchBar repos={repos} setSearchResults={setSearchResults} />
      <div className='px-8 pb-8 pt-4 grid gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {searchResults.map(i =>
          <RepoCard key={i.id} data={i} />
        )}
      </div>
    </>
  );
}

export default Dashboard;