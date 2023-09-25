import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#373538', color: 'white', marginTop: '1vh' }}>
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
            flex-direction: column;
            align-items: center;
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
            display: flex; /* Display icons horizontally */
            justify-content: center; /* Center icons horizontally */
          }
          .social-icons li {
            margin-right: 15px; /* Add space between icons */
          }
          .social-icons a {
            text-decoration: none;
            font-size: 24px;
            transition: transform 0.3s ease-in-out;
          }
          .social-icons .facebook-icon {
            color: #1877f2; /* Facebook blue */
          }
          .social-icons .twitter-icon {
            color: #1da1f2; /* Twitter blue */
          }
          .social-icons .instagram-icon {
            color: #bc2a8d; /* Instagram pink */
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
                <li><a href="https://en-gb.facebook.com/" className="facebook-icon"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/" className="twitter-icon"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/" className="instagram-icon"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
