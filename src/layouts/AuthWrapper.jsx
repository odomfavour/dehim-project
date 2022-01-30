import React from 'react';
import './auth.css'
import Doc from '../images/doc-1.png'
import Dots from '../images/dots.png'

const AuthWrapper = ({children}) => {
  return (
  <div className='auth-container p-3'>
      <div className="d-flex flex-md-row flex-column">
      <div className='doc-image'>
      <h4 className='text-white brand'>DEHIM</h4>
      <div className="doc-image-container">
      <img src={Doc} alt="doctor" className='img-fluid' />
      </div> 
      </div>
      <div className="form-section">
        {children}
      </div>
      </div>
      <div className="dot-box d-none d-md-block d-lg-block">
          <img src={Dots} alt="bottom dots" />
      </div>
  </div>
  );
};

export default AuthWrapper;
