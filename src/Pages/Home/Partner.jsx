import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Acronis from '../../assets/Partner/Acronis.jpg';
import Bitdefender from '../../assets/Partner/Bitdefender.png';
import Checkpoint from '../../assets/Partner/Checkpoint.jpg';
import CyberRanges from '../../assets/Partner/CyberRanges.png';
import lbmLogo from '../../assets/Partner/Ibm-Logo.png';
import IngramMicro from '../../assets/Partner/Ingram-Micro.jpg';
import Lookout from '../../assets/Partner/Lookout.jpg';
import Microsoft from '../../assets/Partner/Microsoft.jpg';
import Mimecast from '../../assets/Partner/Mimecast.jpg';
import NinjaOne from '../../assets/Partner/ninja-one.jpg';
import PurdueUniversity from '../../assets/Partner/Purdue-University.png';
import Rippling from '../../assets/Partner/rippling.jpg';
import Threatlocker from '../../assets/Partner/Threatlocker.jpg';
import TrendMicro from '../../assets/Partner/Trend-Micro.jpg';

const Partner = () => {
  const partnerLogos = [
    { name: 'Acronis', image: Acronis },
    { name: 'Bitdefender', image: Bitdefender },
    { name: 'Checkpoint', image: Checkpoint },
    { name: 'CyberRanges', image: CyberRanges },
    { name: 'LBM', image: lbmLogo },
    { name: 'Ingram Micro', image: IngramMicro },
    { name: 'Lookout', image: Lookout },
    { name: 'Microsoft', image: Microsoft },
    { name: 'Mimecast', image: Mimecast },
    { name: 'NinjaOne', image: NinjaOne },
    { name: 'Purdue University', image: PurdueUniversity },
    { name: 'Rippling', image: Rippling },
    { name: 'Threatlocker', image: Threatlocker },
    { name: 'Trend Micro', image: TrendMicro }
  ];

  return (
    <>
      <section className='w-full lg:max-w-7xl mx-auto px-3 py-24'>
        <SectionTitle title="Our Partners" subTitle="Our Trusted Partners" defaultKey={"Partner"}/>
        <div className="bg-gradient-to-bl from-[#a020f0] from-[-28%] to-[#0E0E0E] to-[73%] text-white py-16 px-6 sm:px-12 rounded-3xl shadow-lg">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }}
          >
            {partnerLogos.map((partner, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center h-full cursor-grab">
                <div className="flex items-center justify-center">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="rounded-[25px] h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Partner;