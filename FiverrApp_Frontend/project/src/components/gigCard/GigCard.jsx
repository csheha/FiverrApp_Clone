import React from 'react';
import "./GigCard.scss";
import {Link} from  'react-router-dom';

const GigCard = ({item}) => {
  return (
    <Link to="/gig/123" className='link'>
    
    <div className='gigCard'>
        
        <img src={item.image} alt=''/>

        <div className="info">
            <div className="user">
                <img src={item.propic} alt=''/>
                <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <img src='/img/star.png' alt=''/>
                <span>{item.star}</span>
            </div>
        </div>

      <hr/>

        <div className="details">
          <img src="./img/heart.png" alt=''/>
          <div className="price">
          <span>STARTING AT</span>
          <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      
    </div>
    </Link>

    
  );
};

export default GigCard

