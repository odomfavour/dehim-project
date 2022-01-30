import React from 'react';
import './suite.css'
import overview from '../../images/discussions.png'
import checkbox from '../../images/check-box.png'
const SuiteOverview = () => {
  return (
    <section className='suite-section'>
      <div className="container">
        <div className="text-center">
          <div className="overview-text">
            <h3>DEHIM SUITE OVERVIEW</h3>
            <p>A complete hospital and clinic management software which allows smooth operation for your core financial, clinical and data processing </p>
          </div>
          <div className="image-box pt-5">
            <img src={overview} alt="discussions" className='img-fluid' />
          </div>
          <div className="overview-num-text">
            <div className="one">
              <h5>1</h5>
              <div className="d-flex align-items-center">
                <div className="check-box me-2">
                  <img src={checkbox} alt="" className='img-fluid' />
                </div>
                <div className="check-text">
                  <p className='mb-0'>Share your Hospital</p>
                </div>
              </div>
            </div>
            <div className="two">
              <h5>2</h5>
              <div className="d-flex align-items-center">
                <div className="check-box me-2">
                  <img src={checkbox} alt="" className='img-fluid' />
                </div>
                <div className="check-text">
                <p className='mb-0'>Manage your Hospital</p>
                </div>
              </div>
            </div>
            <div className="three">
              <h5>3</h5>
              <div className="d-flex align-items-center">
                <div className="check-box me-2">
                  <img src={checkbox} alt="" className='img-fluid' />
                </div>
                <div className="check-text">
                  <p className='mb-0'>Control your Hospital</p>
                </div>
              </div>
            </div>
            <div className="four">
              <h5>4</h5>
              <div className="d-flex align-items-center">
                <div className="check-box me-2">
                  <img src={checkbox} alt="" className='img-fluid' />
                </div>
                <div className="check-text">
                 <p className='mb-0'>Monitor your Hospital</p>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons-container pt-5">
            <button className="btn btn-warning me-3">Watch Video about us </button>
            <button className="btn btn-outline-warning">Share our Video  </button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default SuiteOverview;
