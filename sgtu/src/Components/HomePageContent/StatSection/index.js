import React, { useEffect } from "react";
import eventImg from "../../../event_5.jpg";
import jpgCourses from "./Assets/Images/courses.jpg";
import pngCourses from "./Assets/Images/courses.png";
import jpgELectures from "./Assets/Images/E-Lectures.jpg";
import pngELectures from "./Assets/Images/E-Lectures.png";
import jpgFaculties from "./Assets/Images/faculties.jpg";
import pngFaculties from "./Assets/Images/faculties.png";
import jpgLabs from "./Assets/Images/labs.jpg";
import pngLabs from "./Assets/Images/labs.png";
import jpgLibrary from "./Assets/Images/library.jpg";
import pngLibrary from "./Assets/Images/library.png";
import jpgOnlineCourse from "./Assets/Images/onlineCourse.jpg";
import pngOnlineCourse from "./Assets/Images/onlineCourse.png";

//slide animation is not working

const StatSection = () => {
  return (
    <section className='statSection my-14 lg:my-20'>
      <div className='container mx-auto px-3'>
        <div className='grid lg:grid-cols-5 md:grid-cols-6 grid-cols-2 sm:gap-5 gap-3'>
          <div className='statItem animateThis slideRight md:row-span-2 lg:col-span-1 md:col-span-2'>
            <a href='a-z_list.html' className='statBox flex'>
              <img src={jpgCourses} className='sfimg_course' alt='Courses' />
              <div className='statFigure'>
                <div className='sfCount'>
                  <span className='countNo' data-count='180'>
                    0
                  </span>
                  +
                </div>
                <div className='sfText'>Courses Offered</div>
              </div>
            </a>
          </div>
          <div className='statItem animateThis slideTop lg:col-span-1 md:col-span-2'>
            <a href='#facultySection' className='statBox flex'>
              <img
                src={jpgFaculties}
                className='sfimg_faculty'
                alt='Faculties'
              />
              <div className='statFigure'>
                <div className='sfCount'>
                  <span className='countNo' data-count='18'>
                    0
                  </span>
                </div>
                <div className='sfText'>Faculties</div>
              </div>
            </a>
          </div>
          <div className='statItem animateThis slideBottom lg:col-span-2 md:col-span-2'>
            <a
              href='https://www.youtube.com/playlist?list=PLrTvGdxJHsrgwFX61uW-VKxsbnsc5kDC8'
              target='_blank'
              className='statBox flex'
            >
              <img
                src={jpgELectures}
                className='sfimg_electure'
                alt='E-Lectures'
              />
              <div className='statFigure'>
                <div className='sfCount'>
                  <span className='countNo' data-count='8000'>
                    0
                  </span>
                  +
                </div>
                <div className='sfText'>e-Lectures</div>
              </div>
            </a>
          </div>
          <div className='statItem animateThis slideLeft lg:col-span-1 md:col-span-4'>
            <a href='research/research-labs.html' className='statBox flex'>
              <img src={jpgLabs} className='sfimg_lab' alt='Labs' />
              <div className='statFigure'>
                <div className='sfCount'>
                  <span className='countNo' data-count='4000'>
                    0
                  </span>
                  +
                </div>
                <div className='sfText'>Research & Publications</div>
              </div>
            </a>
          </div>
          <div className='statItem animateThis slideLeft lg:col-span-2 md:col-span-3'>
            <a
              href='http://1.6.136.107/'
              target='_blank'
              className='statBox flex'
            >
              <img src={jpgLibrary} className='sfimg_library' alt='Library' />
              <div className='statFigure'>
                <div className='sfCount'>
                  <span className='countNo' data-count='82500'>
                    0
                  </span>
                  +
                </div>
                <div className='sfText'>Books in 6 Libraries</div>
              </div>
            </a>
          </div>
          <div className='statItem animateThis slideRight lg:col-span-2 md:col-span-3'>
            <a href='alumni.html' className='statBox flex'>
              <img
                src={jpgOnlineCourse}
                className='sfimg_online'
                alt='Online'
              />
              <div className='statFigure'>
                <div className='sfCount'>
                  <span className='countNo' data-count='10000'>
                    0
                  </span>
                  +
                </div>
                <div className='sfText'>Alumni Network</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    // <section className='statSection my-14 lg:my-20'>
    //   <div className='container mx-auto px-3'>
    //     <div className='grid lg:grid-cols-5 md:grid-cols-6 grid-cols-2 sm:gap-5 gap-3'>
    //       <div className='statItem animateThis  md:row-span-2 lg:col-span-1 md:col-span-2'>
    //         <a href='a-z_list.html' className='statBox flex'>
    //           <img src={jpgCourses} className='sfimg_course' alt='Courses' />
    //           <div className='statFigure'>
    //             <div className='sfCount'>
    //               <span className='countNo' data-count='180'>
    //                 0
    //               </span>
    //               +
    //             </div>
    //             <div className='sfText'>Courses Offered</div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className='statItem animateThis  lg:col-span-1 md:col-span-2'>
    //         <a href='#facultySection' className='statBox flex'>
    //           <img
    //             src={jpgFaculties}
    //             className='sfimg_faculty'
    //             alt='Faculties'
    //           />
    //           <div className='statFigure'>
    //             <div className='sfCount'>
    //               <span className='countNo' data-count='18'>
    //                 0
    //               </span>
    //             </div>
    //             <div className='sfText'>Faculties</div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className='statItem animateThis  lg:col-span-2 md:col-span-2'>
    //         <a
    //           href='https://www.youtube.com/playlist?list=PLrTvGdxJHsrgwFX61uW-VKxsbnsc5kDC8'
    //           target='_blank'
    //           className='statBox flex'
    //         >
    //           <img
    //             src={jpgELectures}
    //             className='sfimg_electure'
    //             alt='E-Lectures'
    //           />
    //           <div className='statFigure'>
    //             <div className='sfCount'>
    //               <span className='countNo' data-count='8000'>
    //                 0
    //               </span>
    //               +
    //             </div>
    //             <div className='sfText'>e-Lectures</div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className='statItem animateThis  lg:col-span-1 md:col-span-4'>
    //         <a href='research/research-labs.html' className='statBox flex'>
    //           <img src={jpgLabs} className='sfimg_lab' alt='Labs' />
    //           <div className='statFigure'>
    //             <div className='sfCount'>
    //               <span className='countNo' data-count='4000'>
    //                 0
    //               </span>
    //               +
    //             </div>
    //             <div className='sfText'>Research & Publications</div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className='statItem animateThis  lg:col-span-2 md:col-span-3'>
    //         <a
    //           href='http://1.6.136.107/'
    //           target='_blank'
    //           className='statBox flex'
    //         >
    //           <img src={jpgLibrary} className='sfimg_library' alt='Library' />
    //           <div className='statFigure'>
    //             <div className='sfCount'>
    //               <span className='countNo' data-count='82500'>
    //                 0
    //               </span>
    //               +
    //             </div>
    //             <div className='sfText'>Books in 6 Libraries</div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className='statItem animateThis  lg:col-span-2 md:col-span-3'>
    //         <a href='alumni.html' className='statBox flex'>
    //           <img
    //             src={jpgOnlineCourse}
    //             className='sfimg_online'
    //             alt='Online'
    //           />
    //           <div className='statFigure'>
    //             <div className='sfCount'>
    //               <span className='countNo' data-count='10000'>
    //                 0
    //               </span>
    //               +
    //             </div>
    //             <div className='sfText'>Alumni Network</div>
    //           </div>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
export default StatSection;
