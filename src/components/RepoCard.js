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
    <div>
      <img src={owner.avatar_url} alt='user_image' />
      <h1>
        Repo: {name}
      </h1>
      <h2>
        by: {owner.login}
      </h2>
      <h3>
        Stars: {stargazers_count}
      </h3>
      <p>
        Language: {language}
      </p>
      <p>
        About: {description}
      </p>
    </div>
  );
}

export default RepoCard;