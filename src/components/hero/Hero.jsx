import React from 'react';
import heroImg from '../../images/hero-pic.png'
import './hero.css'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="container">
            <div className="row">
                <div className="col-md-5 hero-text-box">
                    <div className="hero-text">
                    <h1>DEHIM</h1>
                    <p>A complete hospital and clinic management software which allows smooth operation for your core financial, clinical and data processing </p>
                    </div>
                </div>
                <div className="col-md-7 hero-image-box">
                    <div className="hero-image">
                        <img src={heroImg} alt="medicals" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;
