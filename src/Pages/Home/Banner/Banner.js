import './Banner.css'
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className='mx-5 w-80 ' >
      <Carousel className='mt-5' variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className='bnr-text p-4'>Thousand Mile at a Time</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/6564821/pexels-photo-6564821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2 className='bnr-text p-4'>Thousand Mile at a Time</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2 className='bnr-text p-4'>Thousand Mile at a Time</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;