import React from 'react';
import "./Home.scss";
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import {cards} from "../../data";
import CatCard from '../../components/catCard/CatCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>

        <div className="features">
          <div className="container">
            <div className="item">

                <h1>A whole world of freelance services at your fingertips</h1>

                <div className="title">
                  <img src='./img/check.png' alt=''/>
                  The best for every budget
                </div>
                  <p>The high quality services at every price point. No hourly rates just project-based pricing</p>

                <div className="title">
                  <img src="./img/check.png" alt="" />
                  Quality work done quickly
                </div>
                <p>
                  Find the right freelancer to begin working on your project within minutes.
                </p>

                <div className="title">
                  <img src="./img/check.png" alt="" />
                  Protected payments, every time
                </div>
                <p>
                  Always know what you'll pay upfront. Your payment isn't released
                  until you approve the work.
                </p>
            
                <div className="title">
                  <img src="./img/check.png" alt="" />
                  24/7 support
                </div>
                <p>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
                </p>

            </div>

            <div className="item">
              
              <video src="./img/video.mp4" controls/>

            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Home;