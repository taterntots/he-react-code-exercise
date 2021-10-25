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
      <div className='md:flex bg-card rounded-t-md'>
        <img
          className='md:h-32 md:w-32 rounded-tl-md'
          src={owner.avatar_url}
          alt='user image'
        />
        <div className='md:flex md:justify-between text-center md:text-left w-full overflow-hidden'>
          <div className='md:mx-4 self-center mt-4 md:mt-0 min-w-0'>
            <p className='text-5xl break-words'>{name}</p>
            <p>by {owner.login}</p>
          </div>
        </div>
      </div>
      <div className='bg-cardbanner rounded-b-md p-1 pl-3'>
        {/* <p>{language}</p> */}

        <h3 className='font-bold'>
          {stargazers_count}
        </h3>
      </div>
    </div>
  );
}

export default RepoCard;