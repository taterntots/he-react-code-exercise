import React from 'react';

// IMAGES
import OopsIcon from '../../imgs/oops.png'

// ----------------------------------------------------------------------------------
// ---------------------------------- SEARCH ERROR ----------------------------------
// ----------------------------------------------------------------------------------

const SearchError = () => {
  return (
    <div className='text-center text-white'>
      <img
        className='h-1/5 w-1/5 mr-auto ml-auto'
        src={OopsIcon}
        alt='silly user icon'
      />
      <p className='text-lg font-bold leading-6 mt-4'>
        There are no results for that search term.
      </p>
    </div>
  );
}

export default SearchError;