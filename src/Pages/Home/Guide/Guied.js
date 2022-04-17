import React from 'react';
import './Guide.css'

const Guied = ({guide}) => {
  const {name, url} = guide;
  return (
    <div className='col p-3'>
      <div className="card card-guide">
      <div className="card-body">
      <h5 className="card-title name ">Guider Name:{name}</h5>
     </div>
      <img src={url} className="card-img-bottom w-80" alt="..."/>
    </div>
    </div>
  );
};

export default Guied;