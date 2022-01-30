import React from 'react';
import './footer.css'
import dots from '../../images/dots-mobile.png'

const Footer = () => {
  return (
    <footer className='mt-5'>
      <div className="container">
        <div className="footer-content ps-5">
          <div className="row">
            <div className="col-md-3">
              <h4>DEHIM</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nullam euismod eget vel sit lectus et vitae. Quam pulvinar at purus purus. F</p>
            </div>
            <div className="col-md-2">
              <h4>Company</h4>
              <ul className='other-links'>
                <li><a href="#about">About Us</a></li>
                <li><a href="#prvacy">Privacy Policy</a></li>
                <li><a href="#faq">FAQS</a></li>
                <li><a href="#testimonial">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Connect with us</h4>
              <p>42 Montgomery Road Sabo Yaba, Lagos Nigeria</p>
              <p>Medichub@gmail.com</p>
              <p>0802-3456-789</p>
              <ul className='social-icons d-flex justify-content-between align-items-center'>
                <li><a href="#facebook">
                  <i class="fab fa-facebook-square"></i>
                </a></li>
                <li><a href="#twitter">
                  <i class="fab fa-twitter-square"></i>
                </a></li>
                <li><a href="#twitter">
                  <i class="fab fa-twitter-square"></i>
                </a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Subscribe To Our Newsletters</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nullam euismod eget vel sit lectus et vitae. </p>
              <form action="">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <button className="btn btn-warning">SUBSCRIBE</button>
              </form>
            </div>
          </div>
          <div className="d-flex pt-4 align-items-center">
                <hr className="d-md-block d-none" />
                <p className="text-center copyright mb-0">&copy; Defi Med Suite 2021 all simple right observed</p>
                <hr className="d-md-block d-none" />
            </div>
        </div>
        <div className="dot-box">
          <img src={dots} alt="" className='img-fluid' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
