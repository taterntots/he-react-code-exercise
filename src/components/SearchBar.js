import React, { useState, useEffect } from 'react';

// FORMS
import { useForm } from 'react-hook-form';

// COMPONENTS
import LoadSpinner from './utils/LoadSpinner';

// ----------------------------------------------------------------------------------
// --------------------------------- SEARCH BAR -------------------------------------
// ----------------------------------------------------------------------------------

function SearchBar({ repos, setSearchTerm, setSortType, sortType, setLanguageSearchResults, isLoading }) {
  const [filteredLanguageTerm, setFilteredLanguageTerm] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();

  // UseEffect that handles filtering repos by language
  useEffect(() => {
    const results = repos.filter(repo =>
      repo?.language?.toLowerCase().includes(filteredLanguageTerm.toLowerCase())
    );
    setLanguageSearchResults(results);
  }, [filteredLanguageTerm, setLanguageSearchResults, repos]);

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
    <form className='md:flex md:justify-between p-4 bg-searchbar' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex md:w-1/3 mb-3 md:mb-0'>
        <input
          className='w-full px-4 mr-4 rounded-md text-black text-xl'
          placeholder='Search keyword'
          name='search_term'
          type='search'
          {...register('search_term', {
            required: 'Field cannot be empty',
            minLength: {
              value: 3,
              message: '3 character minimum'
            }
          })}
        />
        {errors.search_term && (
          <span className='text-red-600 mr-1'>{errors.search_term.message}</span>
        )}
        <button
          className={isLoading ?
            'opacity-80 pointer-events-none p-3 bg-buttons rounded-md font-medium' :
            'p-3 bg-buttons hover:opacity-80 rounded-md font-medium'
          }
          type='submit'
          data-cy='searchSubmit'
        >
          {isLoading ? (
            <div className='px-3'>
              <LoadSpinner size={20} />
            </div>
          ) : 'Submit'}
        </button>
      </div>

      <div className='flex md:w-1/3 mb-3 md:mb-0'>
        <input
          className='w-full px-4 py-2 rounded-md text-black text-xl'
          placeholder='Filter by language'
          name='language'
          type='search'
          onChange={handleInputChange}
        />
      </div>

      <div className='flex justify-center md:inline'>
        <button
          className={sortType === 'stars' ?
            'p-3 mr-6 bg-sitebackground hover:opacity-80 rounded-md font-medium' :
            'p-3 mr-6 bg-buttons hover:opacity-80 rounded-md font-medium'
          }
          onClick={() => setSortType('')}
          data-cy='sortBest'
        >
          Best Match
        </button>
        <button
          className={sortType === 'stars' ?
            'p-3 bg-buttons hover:opacity-80 rounded-md font-medium' :
            'p-3 bg-sitebackground hover:opacity-80 rounded-md font-medium'
          }
          onClick={() => setSortType('stars')}
          data-cy='sortStar'
        >
          Total Stars
        </button>
      </div>
    </form>
  );
}

export default SearchBar;