/** @format */

import { Header } from '../layout/layout.header';
import Services from '../layout/layout.services';
import StartRent from '../layout/layout.start.rent';
import Testimonial from '../layout/layout.testimonial';
import WhyUs from '../layout/layout.whyus';
import Faq from '../layout/layout.faq';
import Footer from '../layout/layout.footer';

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <WhyUs />
      <Testimonial />
      <StartRent />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
