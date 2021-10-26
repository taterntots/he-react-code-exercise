import React, { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENTS
import RepoCard from './RepoCard';
import SearchBar from './SearchBar';
import LoadSpinner from './utils/LoadSpinner';
import SearchError from './utils/SearchError';

// ----------------------------------------------------------------------------------
// --------------------------------- DASHBOARD --------------------------------------
// ----------------------------------------------------------------------------------

function Dashboard() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [languageSearchResults, setLanguageSearchResults] = useState([]);
  const [sortType, setSortType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // UseEffect to hit the github repositories API and set data to state
  useEffect(() => {
    setIsLoading(true);

    axios({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=${searchTerm}+language&${sortType}`,
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }).then(res => {
      setRepos(res.data.items);
      setIsLoading(false);
    })
      .catch(err => {
        console.log(err)
        setIsLoading(false);
      });
  }, [sortType, searchTerm])

  return (
    <>
      <SearchBar repos={repos} setSearchTerm={setSearchTerm} sortType={sortType} setSortType={setSortType} setLanguageSearchResults={setLanguageSearchResults} isLoading={isLoading} />
      {isLoading ? (
        <div className='min-h-screen mt-10'>
          <LoadSpinner size={100} />
        </div>
      ) : languageSearchResults.length > 0 ? (
        <div className='px-8 pb-8 pt-4 grid gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {languageSearchResults.map(i =>
            <RepoCard key={i.id} data={i} />
          )}
        </div>
      ) : (
        <SearchError searchTerm={searchTerm} />
      )}
    </>
  );
}

export default Dashboard;