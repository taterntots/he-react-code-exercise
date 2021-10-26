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
  const [repos, setRepos] = useState([]); // Sorted by Best Match
  const [starSortedRepos, setStarSortedRepos] = useState([]); // Sorted by Total Stars
  const [searchTerm, setSearchTerm] = useState('');
  const [languageSearchResults, setLanguageSearchResults] = useState([]);
  const [sortType, setSortType] = useState('best');
  const [isLoading, setIsLoading] = useState(false);

  // UseEffect to hit the github repositories API and set best match data to state
  useEffect(() => {
    setIsLoading(true);

    axios({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=${searchTerm}+language`,
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
  }, [searchTerm])

  // UseEffect to hit the github repositories API and set data sorted by stars to state
  // (Originally I had string interpolated the sort method in a single axios call. However, to 
  // avoid hitting the third party API too often, I figured it would be best to set results
  // sorted by stars to a separate state from the start. That way, toggling sort methods does not 
  // hit the API on each button click. )
  useEffect(() => {
    setIsLoading(true);

    axios({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=${searchTerm}+language&sort=stars`,
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }).then(res => {
      setStarSortedRepos(res.data.items);
      setIsLoading(false);
    })
      .catch(err => {
        console.log(err)
        setIsLoading(false);
      });
  }, [searchTerm])

  return (
    <>
      <SearchBar repos={sortType === 'stars' ? starSortedRepos : repos} setSearchTerm={setSearchTerm} sortType={sortType} setSortType={setSortType} setLanguageSearchResults={setLanguageSearchResults} isLoading={isLoading} />
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