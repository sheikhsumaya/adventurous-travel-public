import React from 'react';
import Guiders from '../Guiders/Guiders';
import Offers from '../Offers/Offers';
import Banner from '../Banner/Banner';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offers></Offers>
      <Guiders></Guiders>
    </div>
  );
};

export default Home;