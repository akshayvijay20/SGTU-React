import React from "react";
import eventImg from "../../../event_5.jpg";

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
                  <img src={eventImg} className='facultyImg' />
                  <h3 className='facultyName'>Allied Health Sciences</h3>
                  <a href='./ahs/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/agricultural.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Agricultural Sciences</h3>
                  <a href='./agri/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/BehaviouralSciences.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Behavioural Sciences</h3>
                  <a href='./bhs/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/commerceManagement.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Commerce & Management</h3>
                  <a href='./cm/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/DentalScience.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Dental Sciences</h3>
                  <a href='./dental/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/Education.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Education</h3>
                  <a href='./education/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/EngineeringTechnology.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Engineering and Technology</h3>
                  <a href='./engineering/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/FashionDesign.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Fashion & Design</h3>
                  <a href='./fashion/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/HotelTourism.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Hotel & Tourism Management</h3>
                  <a href='./htm/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/Ayurveda.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>
                    Indian Medical System (Ayurveda)
                  </h3>
                  <a href='./ims/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/Law.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Law</h3>
                  <a href='./law/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/MedicineHealthSciences.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Medicine & Health Sciences</h3>
                  <a href='./medical/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/MassMedia.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>
                    Mass Communication & Media Technology
                  </h3>
                  <a href='./masscomm/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/Nursing.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Nursing</h3>
                  <a href='./nursing/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/NaturopathyYogicSciences.png'
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
                  <img
                    src='assets/images/homepage/faculty/Physiotherapy.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Physiotherapy</h3>
                  <a href='./physiotherapy/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/science.png'
                    className='facultyImg'
                  />
                  <h3 className='facultyName'>Science</h3>
                  <a href='./science/index.html'></a>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='facultyBox'>
                  <img
                    src='assets/images/homepage/faculty/Pharmacy.png'
                    className='facultyImg'
                  />
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
