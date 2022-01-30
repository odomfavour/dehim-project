import React from 'react';
import AuthWrapper from '../../layouts/AuthWrapper';

const signIn = () => {
  return <AuthWrapper>
  <div>
      <div className="text-center mb-3">
          <h2 className='welcome'>Welcome!</h2>
          <h5>Please Sign up</h5>
      </div>
      <form action="">
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Hospital Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your Hospital name" />
          </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Username</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your username" />
          </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
          </div>
          <div className="text-center">
              <div class="d-grid gap-2">
                  <button class="btn btn-warning" type="button">Signup</button>
              </div>
              <p className="text-center">Don’t have an account? Sign up</p>
          </div>
      </form>
  </div>
</AuthWrapper>;
};

export default signIn;
