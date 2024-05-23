import React from 'react';

const WebCareer = () => {
  const openEmail = () => {
    window.location.href = 'mailto:info@nepaltechinnov.com';
  };

  return (
    <>
      <div>
        <h3>We don't have any Web Development positions available at the moment.</h3>
        <p>If you'd like to submit your CV for future positions, please <span style={{ color: 'blue', cursor: 'pointer' }} onClick={openEmail}>click here</span>.</p>
      </div>
    </>
  );
};

export default WebCareer;
