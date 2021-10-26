import React from 'react';
import PacmanLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/react';

// ----------------------------------------------------------------------------------
// ---------------------------------- LOAD SPINNER ----------------------------------
// ----------------------------------------------------------------------------------

const LoadSpinner = ({ loading, size }) => {
  const color = '#FFFFFF';
  const override = css`
    display: flex;
    justify: center;
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <>
      <PacmanLoader color={color} loading={loading} css={override} size={size} />
    </>
  );
}

export default LoadSpinner;