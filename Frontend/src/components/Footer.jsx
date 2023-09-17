import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#373538', color: 'white',marginTop:'1vh' }}>
      <style>
        {`
          .footer {
            font-family: 'Arial', sans-serif;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);
          }
          .footer h3 {
            font-size: 24px;
            margin-bottom: 20px;
          }
          .footer p {
            font-size: 16px;
          }
          .footer-links {
            list-style: none;
            padding: 0;
          }
          .footer-links li {
            margin-bottom: 10px;
          }
          .footer-links li a {
            color: cyan;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
          }
          .newsletter-form {
            display: flex;
            flex-direction: column; /* Stack input and button vertically */
            align-items: center; /* Center items horizontally */
            margin-top: 20px;
          }
          .newsletter-form input[type="email"] {
            width: 60%; 
            padding: 10px;
            border: none;
            border-radius: 4px;
            outline: none;
            font-size: 16px;
            text-align: center; 
          }
          .newsletter-form button {
            width: 20%; 
            background-color: yellow;
            border: none;
            border-radius: 60px;
            color: black;
            font-size: 25px;
            cursor: pointer;
            margin-top: 10px; 
          }
          .newsletter-form button:hover {
            background-color: #0099cc;
          }
          .bottom-bar {
            background-color: #1d1d1d;
            padding: 30px 0;
          }
          .bottom-bar p {
            font-size: 14px;
            margin: 0;
          }
          .social-icons {
            list-style: none;
            padding: 0;
          }
          .social-icons li {
            display: inline-block;
            margin-right: 15px;
          }
          .social-icons i {
            font-size: 24px;
            color: cyan;
            transition: transform 0.3s ease-in-out;
          }
          .social-icons i:hover {
            transform: scale(1.2);
          }
        `}
      </style>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>For More Information</h3>
            <p>Email: VirtuTech@gmail.com</p>
            <p>Phone: +91 987654321</p>
          </div>
          <div className="col-md-4">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates:</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} VirtuTech. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="social-icons">
                <li><a href="https://en-gb.facebook.com/"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
