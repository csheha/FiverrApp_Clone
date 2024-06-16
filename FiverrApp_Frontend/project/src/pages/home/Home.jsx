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
            <div className="item">    {/* left side */}

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

            <div className="item"> {/**Right side */}
              
              <video src="./img/video.mp4" controls/>

            </div>
          </div>
        </div>


        {/* Next features part */}

        <div className="next features">
          <div className="container">
            <div className="item">    {/* left side */}

              <h1>fiverr business</h1>
              <h1>A business solution designed for teams</h1>
              <p>Update to curated experienced packed with tools and benefits, dedicated to business</p>
              <div className="title">
                <img src='./img/check.png' alt=''/>
                <p>Connect to freelance with proven business experience</p>
              </div>
              <div className="title">
                <img src='./img/check.png' alt=''/>
                <p>Get matched with the perfect talent by a customer success manager</p>
              </div>
              <div className="title">
                <img src='./img/check.png' alt=''/>
                <p>Manage teamwork and boost productivity with one powerful workspace</p>
              </div>

              <button>Explore Fiverr Business</button>
            </div>

            <div className="item"> {/**Right side */}
              
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/f83cfb5f5b7cdfed1482b83c956bc561-1710925224537/lohp-pro.png" alt=''/>

            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Home;
