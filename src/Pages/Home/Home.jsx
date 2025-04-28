import React from 'react';
import About from './About';
import Service from './Service';
import Product from './Product';
import Partner from './Partner';
import SliderBanner from './SliderBanner';
import ConsultationBanner1 from './ConsultationBanner1';
import ConsultationBanner2 from './ConsultationBanner2';

const Home = () => {
  return (
          <div>
              <SliderBanner/>
              <About/>
              <Service/>
              <ConsultationBanner1/>
              <Product/>
              <Partner/>
              <ConsultationBanner2/>
          </div>
  );
};

export default Home;
