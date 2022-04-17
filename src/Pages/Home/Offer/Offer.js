import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Offer.css'

const Offer = ({offer}) => {
  const {id, name, price, url, description } = offer;
  const navigate = useNavigate();
  const offerDetail = id =>{
      navigate(`/package/${id}`)
  }
  return (
    <div className='d-flex justify-content-center g-5'>

     <div className="card offer-box">
     <img src={url} alt="" />
        <div className='mt-4 offer-text'>
        <h2 className='mt-4'>Country Name:{name}</h2>
        <h5 className='mt-4'>Package Price:{price}$</h5>
        <h6 className='mt-4'><small>{description}</small>
        <br />
        </h6>
        <button onClick={() =>offerDetail(id)} type="button" className="btn btn-secondary my-4 ms-5 me-0 btn-text">Book Now</button>
        </div>
      </div>

    </div>
  );
};

export default Offer;