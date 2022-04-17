import React from 'react';
import { useParams } from 'react-router-dom';

const Package = () => {
  const {packageId} = useParams();
  return (
    <div>
      <h1>Package{packageId}</h1>
    </div>
  );
};

export default Package;