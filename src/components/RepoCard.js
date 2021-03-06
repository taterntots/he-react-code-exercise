import React from 'react';

// IMAGES
import { ReactComponent as StarIcon } from '../imgs/star.svg';

// ----------------------------------------------------------------------------------
// ---------------------------------- REPO CARD -------------------------------------
// ----------------------------------------------------------------------------------

function RepoCard({ data }) {
  const {
    name,
    owner,
    language,
    stargazers_count
  } = data;

  return (
    <div className='hover:bg-cardhover p-4 rounded-md transform transition duration-500 hover:scale-105 cursor-pointer'>
      <div className='sm:flex bg-card rounded-t-md'>
        <img
          className='h-full w-full sm:h-28 sm:w-28 rounded-tl-md rounded-tr-md sm:rounded-tr-none'
          src={owner.avatar_url}
          alt='user'
        />
        <div className='sm:flex sm:justify-between text-center sm:text-left w-full overflow-hidden'>
          <div className='sm:mx-4 self-center pb-2 sm:pb-0 min-w-0'>
            <p className='text-4xl break-words'>{name}</p>
            <p>by {owner.login}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between bg-cardbanner rounded-b-md p-1 px-3'>
        <h3>{language}</h3>
        <div className='flex'>
          <StarIcon className='self-center w-5 h-5 mr-1.5' />
          <h3 className='font-bold'>
            {stargazers_count}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;