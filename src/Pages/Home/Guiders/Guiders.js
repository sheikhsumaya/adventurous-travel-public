import React, { useEffect, useState } from 'react';
import Guied from '../Guide/Guied';
import './Guiders.css'

const Guiders = () => {

  const [guiders, setguiders] = useState ([]);

  useEffect( ()=>{
    fetch('guide.json')
    .then(res => res.json())
    .then(data => setguiders(data));
  } ,[])

  return (
    <div id='guiders'>
      <h1 className='guider-name p-5 mt-5'>Our Travel Guiders Name</h1>
      <div className='row row-cols-1 row-cols-md-2 g-5 mx-3 p-5'>
      {
        guiders.map(guide => <Guied
          key={guide.id}
          guide={guide}
        ></Guied>)
      }
      </div> 
    </div>
  );
};

export default Guiders;