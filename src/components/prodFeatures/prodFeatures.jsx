import React from 'react';
import './prodFeatures.css'
import clinic from '../../images/clinic.png'
import revenue from '../../images/revenue.png'
import pharmacy from '../../images/pharmacy.png'
import patient from '../../images/patient.png'

const prodFeatures = () => {
    return (
        <section className="product-feat-section">
            <div className="prod-title-box text-center pt-5">
                <h3>Product Features</h3>
            </div>
            <div className="features">
                <div className="p-md-5 p-3 ">
                    <div className="d-flex flex-md-row flex-column">
                        <section className='me-3'>
                        <div className="feature-box">
                            <div className="feature-content">
                                <h4 className='pt-md-3 pt-4'>Clinical Features</h4>
                            </div>
                            <div className="blue-box d-flex align-items-center justify-content-center">
                                <img src={clinic} alt="" className='img-fluid' />
                            </div>
                        </div>
                        </section>
                        <section className='mt-3'>
                        <div className="feature-box">
                            <div className="feature-content">
                                <h4 className='pt-md-3 pt-4'>Patient Administration</h4>
                            </div>
                            <div className="blue-box d-flex align-items-center justify-content-center">
                                <img src={patient} alt="" className='img-fluid' />
                            </div>
                        </div>
                        </section>
                    </div>
                    <div className="d-flex flex-md-row flex-column">
                    <section className='me-3'>
                    <div className="feature-box">
                            <div className="feature-content">
                                <h4 className='pt-md-3 pt-4'>Pharmacy / Inventory</h4>
                            </div>
                            <div className="blue-box d-flex align-items-center justify-content-center">
                                <img src={pharmacy} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </section>
                        <section className='mt-3'>
                            <div className="feature-box">
                                <div className="feature-content">
                                    <h4 className='pt-md-3 pt-4'>Revenue cycle management</h4>
                                </div>
                                <div className="blue-box d-flex align-items-center justify-content-center">
                                    <img src={revenue} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default prodFeatures;
