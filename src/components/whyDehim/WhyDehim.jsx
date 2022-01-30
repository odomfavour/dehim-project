import React from 'react';
import './why.css'
import maleDoc from '../../images/male-doc.png'

const WhyDehim = () => {
  return (
      <div className="why-section">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-7">
                      <div className="image-box">
                          <img src={maleDoc} alt="doctor smiling" className='img-fluid'/>
                      </div>
                  </div>
                  <div className="col-md-5">
                      <div className="why-text">
                          <h3>WHY DEHIM</h3>
                          <p>A complete hospital and clinic management software which allows smooth operation for your core financial, clinical and data processing </p>
                          <button className="btn btn-warning">Learn More</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default WhyDehim;
