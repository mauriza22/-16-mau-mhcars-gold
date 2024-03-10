/** @format */
import CarBanner from '../assets/images/binar.car.banner.png';
import Button from '../components/Button';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const urlLink = [
  {
    link: '/our-services',
    navName: 'Our Services',
  },
  {
    link: '/why-us',
    navName: 'Why Us',
  },
  {
    link: '/testimonial',
    navName: 'Testimonials',
  },
  {
    link: '/faq',
    navName: 'FAQ',
  },
];
export const Header = () => {
  const [open, setopen] = useState(false); //tutup

  //open false
  const toggle = () => {
    setopen(!open);
  };
  return (
    <header className="container header-banner">
      <div className="header-nav">
        <div className="header-logo"></div>
        <ul className="header-navlink">
          {urlLink?.map((item, index) => (
            <li key={index}>{item?.navName}</li>
          ))}
        </ul>
        <div className="btn-responsive">
          <button onClick={toggle} type="button" className="btn-menu">
            <i className="fa fa-bars"></i>
          </button>
          {open && (
            <CSSTransition in={open} timeout={200} classNames="responsive-nav" unmountOnExit>
              <div id="toggle" className="responsive-nav">
                <ul className="navbar">
                  <li>
                    <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
                      <span> BCR</span>
                      <button onClick={toggle} style={{ border: 0, background: 'white', fontSize: 24 }}>
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </li>
                  {urlLink?.map((item, index) => (
                    <li key={index}>{item?.navName}</li>
                  ))}
                </ul>
              </div>
            </CSSTransition>
          )}
        </div>
      </div>

      <div className="hero-banner">
        <div>
          <h1 className="hero-title">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p className="hero-paragraph">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <div className="btn-mulai-sewa">
            <Button type="button" id="change-color" className="hero-btn-banner">
              Mulai Sewa Mobil
            </Button>
          </div>
        </div>
        <div className="hero-banner-car-grid">
          <div className="hero-banner-car">
            <img className="car-banner" src={CarBanner} alt="hero-banner-pic" />
          </div>
        </div>
      </div>
    </header>
  );
};
