import React, { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENTS
import RepoCard from './RepoCard';

// ----------------------------------------------------------------------------------
// --------------------------------- DASHBOARD --------------------------------------
// ----------------------------------------------------------------------------------

function Dashboard() {
  const [repos, setRepos] = useState([]);

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
    <div className='grid gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {repos.map(i =>
        <RepoCard key={i.id} data={i} />
      )}
    </div>
  );
}

export default Dashboard;