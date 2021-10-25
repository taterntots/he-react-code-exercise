import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      console.log(res)
      setRepos(res.data.items);
    })
  }, [])

  return (
    <>
      Dashboard
    </>
  );
}

export default Dashboard;