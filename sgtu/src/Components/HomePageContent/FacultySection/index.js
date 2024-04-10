import React from "react";
import eventImg from "../../../event_5.jpg";
import agricultureImg from "./Assets/Images/agricultural.png";
import alliedHealthSciencesImg from "./Assets/Images/alliedHealthSciences.png";
import aryuvedaImg from "./Assets/Images/Ayurveda.png";
import behaviouralSciencesImg from "./Assets/Images/BehaviouralSciences.png";
import commerceManagementImg from "./Assets/Images/commerceManagement.png";
import dentalScienceImg from "./Assets/Images/DentalScience.png";
import dotsBgImg from "./Assets/Images/DotsBg.png";
import educationImg from "./Assets/Images/Education.png";
import engineeringTechnologyImg from "./Assets/Images/EngineeringTechnology.png";
import fashionDesignImg from "./Assets/Images/FashionDesign.png";
import hotelTourismImg from "./Assets/Images/HotelTourism.png";
import lawImg from "./Assets/Images/Law.png";
import massMediaImg from "./Assets/Images/MassMedia.png";
import medicineHealthSciencesImg from "./Assets/Images/MedicineHealthSciences.png";
import naturopathyYogicSciencesImg from "./Assets/Images/NaturopathyYogicSciences.png";
import nursingImg from "./Assets/Images/Nursing.png";
import pharmacyImg from "./Assets/Images/Pharmacy.png";
import physiotherapyImg from "./Assets/Images/Physiotherapy.png";
import scienceImg from "./Assets/Images/science.png";
import xDotsBgJpg from "./Assets/Images/xDotsBg.jpg";
import xDotsBgPng from "./Assets/Images/xDotsBg.png";

const FacultySection = () => {
  return (
    <section className='homeFacultySection md:py-14 py-10 relative'>
      <div
        id='facultySection'
        style={{ position: "absolute", display: "block", top: "-50px" }}
      ></div>
      <div className='container mx-auto'>
        <div className='text-center hfsIntro px-5 animateThis fadeIn'>
          <h2 className='sectionHead text-white'>
            Multiple Disciplines, Infinite Possibilities
          </h2>
          <p className='max-w-screen-lg mx-auto text-white'>
            SGT gives students a bevy of choices across 18 disciplines.
          </p>
        </div>

        <div className='facultyCarousel max-w-screen-2xl mx-auto animateThis slideTop'>
          <div className='swiper facultySwiper py-5'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={alliedHealthSciencesImg} className='facultyImg' />
                  <h3 className='facultyName'>Allied Health Sciences</h3>
                  <a href='./ahs/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={agricultureImg} className='facultyImg' />
                  <h3 className='facultyName'>Agricultural Sciences</h3>
                  <a href='./agri/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={behaviouralSciencesImg} className='facultyImg' />
                  <h3 className='facultyName'>Behavioural Sciences</h3>
                  <a href='./bhs/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={commerceManagementImg} className='facultyImg' />
                  <h3 className='facultyName'>Commerce & Management</h3>
                  <a href='./cm/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={dentalScienceImg} className='facultyImg' />
                  <h3 className='facultyName'>Dental Sciences</h3>
                  <a href='./dental/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={educationImg} className='facultyImg' />
                  <h3 className='facultyName'>Education</h3>
                  <a href='./education/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={educationImg} className='facultyImg' />
                  <h3 className='facultyName'>Engineering and Technology</h3>
                  <a href='./engineering/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={fashionDesignImg} className='facultyImg' />
                  <h3 className='facultyName'>Fashion & Design</h3>
                  <a href='./fashion/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={hotelTourismImg} className='facultyImg' />
                  <h3 className='facultyName'>Hotel & Tourism Management</h3>
                  <a href='./htm/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={aryuvedaImg} className='facultyImg' />
                  <h3 className='facultyName'>
                    Indian Medical System (Ayurveda)
                  </h3>
                  <a href='./ims/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={lawImg} className='facultyImg' />
                  <h3 className='facultyName'>Law</h3>
                  <a href='./law/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={medicineHealthSciencesImg} className='facultyImg' />
                  <h3 className='facultyName'>Medicine & Health Sciences</h3>
                  <a href='./medical/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={massMediaImg} className='facultyImg' />
                  <h3 className='facultyName'>
                    Mass Communication & Media Technology
                  </h3>
                  <a href='./masscomm/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={nursingImg} className='facultyImg' />
                  <h3 className='facultyName'>Nursing</h3>
                  <a href='./nursing/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src={naturopathyYogicSciencesImg}
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>
                    Naturopathy and Yogic Sciences
                  </h3>
                  <a href='./fnys/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={physiotherapyImg} className='facultyImg' />
                  <h3 className='facultyName'>Physiotherapy</h3>
                  <a href='./physiotherapy/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={scienceImg} className='facultyImg' />
                  <h3 className='facultyName'>Science</h3>
                  <a href='./science/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img src={pharmacyImg} className='facultyImg' />
                  <h3 className='facultyName'>Pharmacy</h3>
                  <a href='./pharmacy/index.html'></a>
                </div>
              </div>
            </div>
          </div>

          <button className='swiper-button-next facultynaviNext facultyNaviBtns'></button>
          <button className='swiper-button-prev facultynaviPrev facultyNaviBtns'></button>
        </div>

        <div className='text-center'>
          <a href='./faculty-listing.html' className='yellowBtn font-semibold'>
            View all Faculties
          </a>
        </div>
      </div>
    </section>
  );
};
export default FacultySection;
