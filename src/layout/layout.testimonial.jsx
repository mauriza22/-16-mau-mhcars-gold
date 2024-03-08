/** @format */
import testiMale from '../assets/images/binar.user.testi.male.png';
import testiFemale from '../assets/images/binar.user.testi.female.png';
import ic_star from '../assets/images/binar.star.png';

const Testimonial = () => {
  return (
    <section className="carousel">
      <div className="section-carousel-title">
        <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div>
        <div className="section-box">
          <div className="section-carousel">
            <div className="section-carousel-box">
              <div className="section-carousel-component">
                <img src={testiMale} alt="human-pic" />
                <div className="section-content-text">
                  <div>
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="text-carousel">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-carousel">
            <div className="section-carousel-box">
              <div className="section-carousel-component">
                <img src={testiMale} />
                <div className="section-content-text">
                  <div>
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="text-carousel">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-carousel">
            <div className="section-carousel-box">
              <div className="section-carousel-component">
                <img src={testiFemale} alt="human-pic" />
                <div className="section-content-text">
                  <div>
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                    <img src={ic_star} />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="text-carousel">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-nav">
          <span className="icon-left">
            <i className="fa fa-chevron-left"></i>
          </span>
          <span className="icon-right">
            <i className="fa fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
