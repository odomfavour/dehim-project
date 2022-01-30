import React from 'react';
import './BlankBg.css'

const BlankBg = ({children}) => {
  return (
    <section className=''>
        <div className="d-flex justify-content-center align-items-center blank-section">
            {children}
        </div>
    </section>
    );
};

export default BlankBg;
