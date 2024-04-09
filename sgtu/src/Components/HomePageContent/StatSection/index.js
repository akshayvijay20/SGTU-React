import React from "react";
import eventImg from "../../../event_5.jpg";

const NIRF = () => {
  return (
    <section className='statSection my-14 lg:my-20'>
      <div className='container mx-auto px-3'>
        <div className='grid lg:grid-cols-5 md:grid-cols-6 grid-cols-2 sm:gap-5 gap-3'>
          <div className='statItem animateThis slideRight md:row-span-2 lg:col-span-1 md:col-span-2'>
            <a href='a-z_list.html' className='statBox flex'>
              <img src={eventImg} className='sfimg_course' />
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
              <img src={eventImg} className='sfimg_faculty' />
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
              <img src={eventImg} className='sfimg_electure' />
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
              <img
                src='assets/images/homepage/stats/labs.jpg'
                className='sfimg_lab'
              />
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
              <img src={eventImg} className='sfimg_library' />
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
              <img src={eventImg} className='sfimg_online' />
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

        {/* <div className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-row-3 lg:gap-5 sm:gap-3 gap-2 statGrid titleFont hidden">
                    <div className="statItem md:order-1 animateThis fadeGrow">
                        <div className="statBox flex">
                            <img src="assets/images/homepage/stats/books.png" className="sfimg_book"/>
                            <div className="statFigure text-right">
                                <div className="sfCount"><span className="countNo" data-count="18">0</span></div>
                                <div className="sfText">Faculties</div>
                            </div>
                        </div>
                    </div>
                    <div className="statItem md:order-3 animateThis fadeGrow">
                        <div className="statBox flex">
                            <img src="assets/images/homepage/stats/flask.png" className="sfimg_flask"/>
                            <div className="statFigure">
                                <div className="sfCount"><span className="countNo" data-count="170">0</span>+</div>
                                <div className="sfText">Labs</div>
                            </div>
                        </div>
                    </div>
                    <div className="statItem col-span-2 md:row-span-2 md:order-2 animateThis fadeGrow">
                        <div className="statBox flex">
                            <img src="assets/images/homepage/stats/girl.png" className="sfimg_girl"/>
                            <div className="statFigure big">
                                <div className="sfCount"><span className="countNo" data-count="180">0</span>+</div>
                                <div className="sfText">Courses</div>
                            </div>
                        </div>
                    </div>
                    <div className="statItem md:order-4 animateThis fadeGrow">
                        <div className="statBox flex items-end">
                            <img src="assets/images/homepage/stats/scroll.png" className="sfimg_scroll"/>
                            <div className="statFigure text-right">
                                <div className="sfCount"><span className="countNo" data-count="770">0</span></div>
                                <div className="sfText">Online Course Module</div>
                            </div>
                        </div>
                    </div>
                    <div className="statItem md:order-5 animateThis fadeGrow">
                        <div className="statBox flex">
                            <img src="assets/images/homepage/stats/man.png" className="sfimg_man"/>
                            <div className="statFigure">
                                <div className="sfCount"><span className="countNo" data-count="8000">0</span>+</div>
                                <div className="sfText">E-Lectures</div>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
    </section>
  );
};
export default NIRF;
