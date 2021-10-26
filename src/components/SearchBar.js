import React, { useState, useEffect } from 'react';

// FORMS
import { useForm } from 'react-hook-form';

// ----------------------------------------------------------------------------------
// --------------------------------- SEARCH BAR -------------------------------------
// ----------------------------------------------------------------------------------

function SearchBar({ repos, setSearchTerm, setSortType, setLanguageSearchResults }) {
  const [filteredLanguageTerm, setFilteredLanguageTerm] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();

  // UseEffect that handles filtering repos by language
  useEffect(() => {
    const results = repos.filter(repo =>
      repo?.language?.toLowerCase().includes(filteredLanguageTerm.toLowerCase())
    );
    setLanguageSearchResults(results);
  }, [filteredLanguageTerm, repos]);

  // Function for handling input for language filter
  const handleInputChange = (event) => {
    event.preventDefault();
    setFilteredLanguageTerm(event.target.value);
  }

  // Submit function for setting the search term and initiating a new github query
  const onSubmit = (data) => {
    setSearchTerm(data.search_term);
  }

  return (
    <form className='flex justify-between p-4 bg-searchbar' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-1/3'>
        <input
          className='w-full px-4 mr-4 rounded-md text-black text-xl'
          placeholder='Search keyword'
          name='search_term'
          type='search'
          {...register('search_term')}
        />
        <button
          className='p-3 bg-buttons hover:bg-sitebackground rounded-md font-medium'
          type='submit'
        >
          Submit
        </button>
      </div>

      <div className='flex w-1/3'>
        <input
          className='w-full px-4 rounded-md text-black text-xl'
          placeholder='Filter language'
          name='language'
          type='search'
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button
          className='p-3 mr-6 bg-buttons hover:bg-sitebackground rounded-md font-medium'
          onClick={() => setSortType('')}
        >
          Best Match
        </button>
        <button
          className='p-3 bg-buttons hover:bg-sitebackground rounded-md font-medium'
          onClick={() => setSortType('sort=stars')}
        >
          Total Stars
        </button>
      </div>
    </form>
  );
}

export default SearchBar;