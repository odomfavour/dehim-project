import React, { useState } from 'react';
import './AddStaff.css'
import AdminDashboardWrapper from '../../../layouts/AdminDashboardWrapper';
import file from '../../../images/file.png'

const AddStaff = () => {
    const [addStaff, setAddStaff] = useState(false);
    const handleAddition = () => setAddStaff(!addStaff);
    return (
        <AdminDashboardWrapper>
            {!addStaff ? (<section className="d-flex justify-content-center align-items-center" style={{ minHeight: 80 + 'vh', width: 100 + '%' }}>
                <div className='text-center'>
                    <img src={file} alt="staff records" className='img-fluid' />
                    <h4>Simple add your staff</h4>
                    <p>Send a simple or detailed invoice to your customer with this feature</p>
                    <button className="btn btn-warning" onClick={handleAddition}> + Add Staff</button>
                </div>
            </section>) : ("")}
            {addStaff ? (<section className='staff-reg-section pt-4'>
                <div>
                    <header className="d-flex align-items-center justify-content-between pb-2">
                        <h5 className="page-name">Staff Registration Form</h5>
                        <div className='d-flex justify-content-between align-items-center flex-md-row flex-column'>
                            <a href="#" className='me-md-3 me-0'>View All Staffs</a>
                            <button className="btn btn-warning"> + Add Staff</button>
                        </div>
                    </header>
                    <div className='py-5'>
                        <form action="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="right-section px-3">
                                        <h4 className='mb-4'>Personal Details</h4>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Date Registered</label>
                                                    <input type="date" className="form-control" id="date" placeholder="01 / 12/ 2021" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="">Title</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option >Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Surname</label>
                                                    <input type="text" className="form-control" id="date" placeholder="Surname" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Other names</label>
                                                    <input type="text" className="form-control" id="date" placeholder="Other names" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
                                                    <input type="text" className="form-control" id="maritalStatus" placeholder="01 / 12/ 2021" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                                                    <input type="date" className="form-control" id="date" placeholder="01 / 12/ 2021" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Gender</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option >Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Religion</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option >Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="nationality" className="form-label">Nationality</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option >Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">State/Province</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option >Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 border-start border-2">
                                    <section className="official-section px-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4>Official Details</h4>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Appointment Dates</label>
                                                    <input type="date" className="form-control" id="date" placeholder="01 / 12/ 2021" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Department</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option >Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Role</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option >Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="mt-5">
                                                    <div className="login-details">
                                                        <div className="mb-3">
                                                            <label htmlFor="username" className="form-label">Usernanme</label>
                                                            <input type="text" className="form-control" id="username" placeholder="Usernanme" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="password" className="form-label">Password</label>
                                                            <input type="text" className="form-control" id="password" placeholder="Password" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                                            <input type="text" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                                                        </div>
                                                        <div className="button-box">
                                                            <div className="d-grid gap-2">
                                                                <button className="btn btn-warning" type="button">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2"></div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label htmlFor="autogenerate" className="form-label">Staff ID</label>
                                                    <input type="text" className="form-control" id="autogenerate" placeholder="Autogenerate" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>) : ("")}
        </AdminDashboardWrapper>
    );
};

export default AddStaff;
