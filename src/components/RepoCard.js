import React from 'react';

// ----------------------------------------------------------------------------------
// ---------------------------------- REPO CARD -------------------------------------
// ----------------------------------------------------------------------------------

function RepoCard({ data }) {
  const {
    name,
    owner,
    language,
    description,
    stargazers_count
  } = data;

  return (
    <div className='hover:bg-cardhover p-4 rounded-md'>
      <div className='sm:flex bg-card rounded-t-md'>
        <img
          className='h-full w-full sm:h-32 sm:w-32 rounded-tl-md rounded-tr-md sm:rounded-tr-none'
          src={owner.avatar_url}
          alt='user image'
        />
        <div className='sm:flex sm:justify-between text-center sm:text-left w-full overflow-hidden'>
          <div className='sm:mx-4 self-center pb-2 sm:pb-0 min-w-0'>
            <p className='text-4xl break-words'>{name}</p>
            <p>by {owner.login}</p>
          </div>
        </div>
      </div>
      <div className='bg-cardbanner rounded-b-md p-1 pl-3'>
        <h3 className='font-bold'>
          {stargazers_count}
        </h3>
      </div>
    </div>
  );
}

export default RepoCard;