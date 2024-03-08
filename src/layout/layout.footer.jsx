/** @format */

import ic_facebook from '../assets/icon/icon_facebook.png';
import ic_instagram from '../assets/icon/icon_instagram.png';
import ic_twitter from '../assets/icon/icon_twitter.png';
import ic_mail from '../assets/icon/icon_mail.png';
import ic_twitch from '../assets/icon/icon_twitch.png';

const Footer = () => {
  return (
    <footer id="footer" className="container section-footer">
      <div className="footer-address">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="footer-services">
        <p>Our Services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div className="footer-icon">
        <p>Connect with us</p>
        <ul className="footer-icon-img">
          <li>
            <img src={ic_facebook} alt="ic-balls" />
          </li>
          <li>
            <img src={ic_instagram} alt="ic-balls" />
          </li>
          <li>
            <img src={ic_twitter} alt="ic-balls" />
          </li>
          <li>
            <img src={ic_mail} alt="ic-balls" />
          </li>
          <li>
            <img src={ic_twitch} alt="ic-balls" />
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <p>Copyright Binar 2022</p>
        <div className="header-logo"></div>
      </div>
    </footer>
  );
};

export default Footer;
