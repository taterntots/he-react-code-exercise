import React from 'react';

// ----------------------------------------------------------------------------------
// --------------------------------- FILTER BAR -------------------------------------
// ----------------------------------------------------------------------------------

function FilterBar({ setSortType }) {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center w-1/2 bg-card'>

        <button
          className='p-4 bg-cardbanner hover:bg-sitebackground rounded-md'
          onClick={() => setSortType('')}
        >
          Best Match
        </button>
        <button
          className='p-4 bg-cardbanner hover:bg-sitebackground rounded-md'
          onClick={() => setSortType('sort=stars')}
        >
          Total Stars
        </button>
      </div>
    </div>
  );
}

export default FilterBar;