import React from 'react';
import AuthWrapper from '../../layouts/AuthWrapper';

const signup = () => {
    return (
        <AuthWrapper>
            <div>
                <div className="text-center mb-3">
                    <h2 className='welcome'>Welcome!</h2>
                    <h5>Please Sign up</h5>
                </div>
                <form action="">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number " />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Organization</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your organization name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Country</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="text-center">

                        <div class="d-grid gap-2">
                            <button class="btn btn-warning" type="button">Signup</button>
                        </div>
                        <p className="text-center">Already have an account? Sign in</p>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
};

export default signup;
