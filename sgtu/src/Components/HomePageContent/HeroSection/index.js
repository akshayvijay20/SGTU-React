import React from "react";
import sgtuBannerVideo from "../../../SGTU_Video_Banner.mp4";

const HeroSection = () => {
  return (
    <section className='heroSection'>
      <div className='bannerBox'>
        <div className='curve tplf'></div>
        <div className='curve btrt'></div>
      </div>
      <div
        className='heroVideo'
        // style={{ backgroundImage: "url('./SGTU_Video_Banner.jpg')" }}
      >
        <video className='w-full h-full herovideoFrame z-1' autoPlay muted loop>
          <source src={sgtuBannerVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='heroVideoText'>
          <h1 className='sectionHead'>Determined to Excel</h1>
        </div>
      </div>

      {/* <div className='swiper homeBanner'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide hbSlide'>
                <img
                  src='./assets/images/homepage/banner/slide_1.jpg'
                  alt=''
                  className='hbImg'
                />
              </div>
              <div className='swiper-slide hbSlide'>
                <img
                  src='./assets/images/homepage/banner/slide_2.jpg'
                  alt=''
                  className='hbImg'
                />
              </div>
              <div className='swiper-slide hbSlide'>
                <img
                  src='./assets/images/homepage/banner/slide_3.jpg'
                  alt=''
                  className='hbImg'
                />
              </div>
              <div className='swiper-slide hbSlide'>
                <img
                  src='./assets/images/homepage/banner/slide_4.jpg'
                  alt=''
                  className='hbImg'
                />
              </div>
              <div className='swiper-slide hbSlide'>
                <img
                  src='./assets/images/homepage/banner/slide_5.jpg'
                  alt=''
                  className='hbImg'
                />
              </div>
            </div>
          </div>{" "} */}
    </section>
  );
};
export default HeroSection;
