import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Offer from '../Offer/Offer';
import './Offers.css'

const Offers = () => {

  const [offers, setOffers] = useState ([]);

  useEffect( ()=>{
    fetch('offer.json')
    .then(res => res.json())
    .then(data => setOffers(data));
  } ,[])

  return (
   <div id='packages'>
       <h1 className='d-flex justify-content-center h-offer mt-5 p-5'>Here are our some packages</h1>
      <div className="row row-cols-1 row-cols-md-3 g-3 mx-2">
      {
          offers.map(offer => <Offer
          key= {offer.id}
          offer={offer}
          ></Offer>)
        }

    </div>
   </div>
  );
};

export default Offers;