import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import Image1 from '../../assets/Banner-1.webp';
import Image2 from '../../assets/Banner-2.webp';
import Image3 from '../../assets/Banner-3.webp';

const banners = [
  { id: 1, image: Image1 },
  { id: 2, image: Image2 },
  { id: 3, image: Image3 },
];

const SliderBanner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      loop={true}
    //   autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   }}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <section
            className="bg-gray-900 text-white mb-10 bg-no-repeat bg-cover 
            h-[400px] lg:h-[390px] bg-center cursor-grab lg:mt-[110px]"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="py-28">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-white bg-clip-text text-3xl font-bold text-transparent sm:text-[34px] text-start">
                Securing Your Digital World
                </h1>
                <p className="mt-4 max-w-lg text-start sm:text-base/relaxed text-[#FFFFFF] font-medium ">
                Providing top to bottom cybersecurity consulting and services to protect your business from digital threats.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
                  <div>
                    <a
                      className="block w-full px-7 py-3 bg-[#ED1C24]  border-2 border-white lg:text-[14px] text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto rounded-full"
                      href=""
                    >
                     Get Started
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderBanner;
