import React from 'react';
import BlankBg from '../../layouts/BlankBg';
import basic from '../../images/basic.png'
import standard from '../../images/standard.png'
import premium from '../../images/premium.png'

import './packages.css'

const packages = () => {
    return (
        <BlankBg>
            <section className="p-md-5 p-3 blank-card">
                <h5 className='text-center'>Choose a product package type</h5>
                <div className="my-5">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="package-card text-center">
                                <div className="image-box">
                                    <img src={basic} alt="basic package" className='img-fluid' />
                                </div>
                                <div className="text-section mt-3">
                                    <h6>Basic</h6>
                                    <div className="mt-2">
                                        <p>For small size
                                            hospital
                                            and Clinics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="package-card text-center">
                                <div className="image-box">
                                    <img src={standard} alt="standard package" className='img-fluid' />
                                </div>
                                <div className="text-section mt-3">
                                    <h6>Basic</h6>
                                    <div className="mt-2">
                                        <p>For medium size
                                            hospital
                                            and Clinics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="package-card text-center">
                                <div className="image-box">
                                    <img src={premium} alt="premium package" className='img-fluid' />
                                </div>
                                <div className="text-section mt-3">
                                    <h6>Basic</h6>
                                    <div className="mt-2">
                                        <p>For large size
                                            hospital
                                            and Clinics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-warning">Setup Package</button>
                </div>
            </section>

        </BlankBg>
    );
};

export default packages;
