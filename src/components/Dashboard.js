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
    <>
      {repos.map(i =>
        <RepoCard key={i.id} data={i} />
      )}
    </>
  );
}

export default Dashboard;