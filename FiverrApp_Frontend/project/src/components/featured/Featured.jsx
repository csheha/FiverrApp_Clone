import React from 'react';
import "./Featured.scss";

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
        <div className='left'>
            <h1>Find the perfect <i>freelance </i>service for your business</h1>

            <div className="search">
                <div className="searchinput">
                    <img src='./img/search.png' alt=' '/>
                    <input type='text' placeholder='Try "builing mobile app"'></input>
                </div>
                <button>Search</button>
            </div>
            
            <div className="popular">
                <span>Popular:</span>
                <button>Web Design</button>
                <button>Wordpress</button>
                <button>LogoDesign</button>
                <button>AI services</button>
            </div>
        </div>
        <div className='right'>
        <img src='./public/img/man.png' alt='man'/>
            
        </div>

        </div>
    </div>
  )
}

export default Featured;
