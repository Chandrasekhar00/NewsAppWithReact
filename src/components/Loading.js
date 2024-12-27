// src/components/Loading.js
import React from 'react';
import loading from '../circle-9360_512.gif'; // Ensure this path is correct

const Loading = () => {
  return (
    <div>
      <center>
        <img 
          src={loading} 
          alt="Loading Spinner" 
          style={{ width: '50px', height: '50px' }}
        />
      </center>
    </div>
  );
};

export default Loading;
