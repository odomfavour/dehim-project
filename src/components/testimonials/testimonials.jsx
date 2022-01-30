import React from 'react';
import './testimonial.css'
import person1 from '../../images/person1.png'

const testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="text-center pb-5">
                    <h2>Testimonials</h2>
                    <div className="centered-text">
                        <p>A complete hospital and clinic management software which allows smooth operation for your core financial, </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="testimonial px-3">
                            <div className="person-image text-center pt-3">
                                <img src={person1} alt="" className='img-fluid' />
                            </div>
                            <div className="testimony pt-3 text-center">
                                <p>A complete hospital and clinic management software which allows smooth operation for your core financial, </p>
                            </div>
                        </div>
                        <div className="base">
                            <div className="person-info">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-4 px-1">
                                            <div className="person-line"></div>
                                        </div>
                                        <div className="col-md-8 col-8 px-1">
                                            <h5>Olayemi Olorunsola</h5>
                                            <p>CEO MedicHUB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial px-3">
                            <div className="person-image text-center pt-3">
                                <img src={person1} alt="" className='img-fluid' />
                            </div>
                            <div className="testimony pt-3 text-center">
                                <p>A complete hospital and clinic management software which allows smooth operation for your core financial, </p>
                            </div>
                        </div>
                        <div className="base">
                            <div className="person-info">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-4 px-1">
                                            <div className="person-line"></div>
                                        </div>
                                        <div className="col-md-8 col-8 px-1">
                                            <h5>Olayemi Olorunsola</h5>
                                            <p>CEO MedicHUB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial px-3">
                            <div className="person-image text-center pt-3">
                                <img src={person1} alt="" className='img-fluid' />
                            </div>
                            <div className="testimony pt-3 text-center">
                                <p>A complete hospital and clinic management software which allows smooth operation for your core financial, </p>
                            </div>
                        </div>
                        <div className="base">
                            <div className="person-info">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-4 px-1">
                                            <div className="person-line"></div>
                                        </div>
                                        <div className="col-md-8 col-8 px-1">
                                            <h5>Olayemi Olorunsola</h5>
                                            <p>CEO MedicHUB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default testimonials;
