import React from "react";
import clgImg from "../../sgtu_Logo.png"; // Import your image paths
import NaacImg from "../../NAAC-ICON.png"; // Import your image paths
import MenuWrapper from "./MenuWrapper";
import "./styles.css";

const Header = () => {
  const searchRedirect = (event) => {
    // Function for handling search form submission
    event.preventDefault();
    // Add your logic for search redirection here
  };

  return (
    <header className='pageHeader'>
      <div className='headContainer'>
        <div className='header-logo'>
          <a href='index.html' className='block'>
            <img
              src={clgImg}
              alt='Shree Guru Gobind Singh Tricentenary University (SGT University)'
              className='w-32 h-auto'
            />
          </a>

          <div className='NaacLogo'>
            <div>
              {" "}
              <img src={NaacImg} alt='icon' />{" "}
            </div>
          </div>
        </div>

        <div className='headerRight flex flex-row items-center md:gap-6 gap-4'>
          <div className='hidden lg:block' translate='no'>
            <div className='swiper courseApplySwiper'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <a href='admissions/enquiry-form-bds-bams.html' className=''>
                    MBBS / BAMS / BDS
                  </a>
                </div>
                <div className='swiper-slide'>
                  <a href='admissions/admit-for-md-ms-mds.html' className=''>
                    MD / MS / MDS
                  </a>
                </div>
              </div>
            </div>

            <a href='admissions/apply-online.html' className='applyOnlineBtn'>
              APPLY ONLINE
            </a>
          </div>
          <div className='langBox' translate='no' title='Change Language'>
            {/* Your language dropdown content */}
          </div>
          <div className='search-container'>
            <form
              role='search'
              method='get'
              className='search-form'
              action='#'
              onSubmit={searchRedirect} // Use onSubmit instead of onsubmit
            >
              <input
                type='search'
                className='search-field'
                placeholder='What are you looking for?'
                value=''
                name='keyword'
                title='Search for:'
              />
              <input type='submit' className='search-submit' value='Search' />
            </form>
          </div>
          <div className='header-nav'>
            <div className='hamburger'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <MenuWrapper />
        </div>
      </div>
    </header>
  );
};

export default Header;
