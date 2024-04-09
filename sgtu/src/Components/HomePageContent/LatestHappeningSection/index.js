import React from "react";

const LatestHappeningSection = () => {
  return (
    <section className='lightBlueBg md:py-14 py-10 latestHappeningSection'>
      <div className='container mx-auto px-3'>
        <div className='flex lg:flex-row flex-col xl:gap-14 lg:gap-5'>
          <div className='lg:w-3/5 mb-8 lg:mb-0'>
            <h3 className='sectionSubtitle titleFont mb-5 titleHL animateThis fadeIn'>
              Latest Happenings
            </h3>

            <div className='animateThis slideRight'>
              <div className='swiper happeningSwiper'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/Radha-Krishna-Sang-Phoolon-Ki-Holi.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          Radha Krishna Sang Phoolon Ki Holi: 16th March 2024 |
                          Kaleidoscope of Colors, Music, and Unbridled Joy
                        </h3>
                        <p className='mb-5'>
                          SGT University's campus was transformed into a canvas
                          of colors and festivity for "Radha Krishna Sang
                          Phoolon Ki Holi - 2024." The talented students of SGT
                          took the stage by storm, captivating the audience with
                          their mesmerizing choreography and infectious energy.
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/MoU-With-Skills-And-Education-Group.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          MoU with Skills and Education Group: 7th March 2024 |
                          Upgrading and Learning Forever
                        </h3>
                        <p className='mb-5'>
                          SGT University has joined forces with Skills and
                          Education Group, UK, through an MOU signed on 7th
                          March 2024. This collaboration aims to uplift our
                          faculty's expertise across disciplines and curate
                          innovative interdisciplinary courses.
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/MoU-With-CST-Enviro-Tech.jpeg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          MoU with CST Enviro Tech: 15th March 2024 | Forging
                          Ahead in Sustainable Energy with a Landmark MoU!
                        </h3>
                        <p className='mb-5'>
                          Our Mechanical Engineering Department joins forces
                          with CST Envirotech to establish a cutting-edge
                          Hydrogen Engine Testing Lab. This state-of-the-art
                          facility will spearhead research in hydrogen fuel,
                          empowering students and faculty to explore
                          eco-friendly energy solutions.
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/Self-Defence-Workshop.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          Self-Defence Workshop: 6th March 2024 | Empowering
                          Individuals and Championing Societal Progress.
                        </h3>
                        <p className='mb-5'>
                          In commemoration of International Women's Day, SGT
                          University organized an empowering "Self-Defence
                          Workshop" in collaboration with ASMI – Centre for
                          Women Leadership and the Women Study Centre. This
                          impactful initiative aimed to foster a sense of
                          confidence and safety among the participants.
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="swiper-slide">
                                        <div className="updatesFirst flex flex-col">
                                            <div className="grow">
                                                <img src="assets/images/homepage/update/1.jpg" className="updateImg mb-4"/>
                                                <h3 className="updateHead mb-3">Visit to NRDC: 5th March 2024 Exploring Unique Technology Transfer Opportunities</h3>
                                                <p className="mb-5">Our Technology Transfer Cell recently visited the National Research Development Corporation (NRDC) headquarters in New Delhi. The aim was to explore mechanisms for transferring innovative technologies to potential innovators for large-scale production and marketing.</p>
                                            </div>
                                            <div className=""><a href="" className="blueBtn">Read more</a></div>
                                        </div>
                                    </div>  */}
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/1.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          BASANT UTSAV 2024: 19th February 2024 | Spring's
                          Vibrancy in Floral Glory
                        </h3>
                        <p className='mb-5'>
                          SGT University was dressed in beautiful hues of floral
                          paradise to celebrate the onset of spring at the 6th
                          edition of Basant Utsav. Thematic exhibits were a
                          prime event highlight, showcasing scenes from Indian
                          myths and culture. This year’s main attraction was a
                          replica of the Ram Temple, decorated with and
                          encircled by various flowers.
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/2.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          Starcast of “Dehati Ladke” at SGT: 15th December 2023
                          | An Evening for the Books!
                        </h3>
                        <p className='mb-5'>
                          Social media superstar Kusha Kapila and the rest of
                          Dehati Ladke cast brought the magic to SGT. It was an
                          evening filled with laughter and excitement as they
                          shared insights into their upcoming OTT show and
                          interacted with our students.
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/3.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          GENESIS 2024: 21-23rd February 2024 | Uniting Every
                          Member of the SGT Medical Community
                        </h3>
                        <p className='mb-5'>
                          The signature event of the Faculty of Medicine and
                          Health Sciences, Genesis is more than just a medical
                          fest—it's a celebration of cultural diversity and
                          creative spirit. For three unforgettable days, our
                          students let themselves loose in a blend of cultural,
                          academic, and sporting events.
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/4.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          SYNERGY 2023: 11-13th October 2023 | Celebrating the
                          Very Best in Innovation
                        </h3>
                        <p className='mb-5'>
                          The fourth iteration of this massive techno festival
                          gave students an experience unlike any other. With
                          25000+ students, 200+ schools, and 300+ projects, this
                          year delivered on both the technological and cultural
                          fronts, taking everything to the next level.{" "}
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/5.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          SYMPHONIOUS 2024: 17th February 2024 | Rock on SGT!
                        </h3>
                        <p className='mb-5'>
                          A musical wave swept over the campus as the university
                          hosted the “Symphonious 2024” extravaganza. Headlined
                          by actor, TV host, and singer Meiyang Chang, the event
                          featured a "Battle of the Bands" competition that had
                          SGT's talented student musicians battling it out on
                          stage with electric performances.{" "}
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updatesFirst flex flex-col'>
                      <div className='grow'>
                        <img
                          src='assets/images/homepage/update/6.jpg'
                          className='updateImg mb-4'
                        />
                        <h3 className='updateHead mb-3'>
                          RACES-2024 International Conference: 23-24th February
                          2024 | Scientific Solutions for a Sustainable Future
                        </h3>
                        <p className='mb-5'>
                          An impactful two-day international conference on
                          recent advances in chemical and environmental
                          sciences. Held in collaboration with esteemed partners
                          like IFFCO, the American Chemical Society, and
                          Sanrachna. The event brought together over 200
                          participants to explore green solutions for
                          sustainable development.
                        </p>
                      </div>
                      <div className=''>
                        <a href='' className='blueBtn'>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-between mt-5 hsBtns'>
                  <div className=''>
                    <a href='' className='whiteBtn'>
                      View all
                    </a>
                  </div>
                  <div className='sm:flex gap-2 hidden'>
                    <div>
                      <button className='swiper_cirNavBtns swiper-button-prev lhPrev'></button>
                    </div>
                    <div>
                      <button className='swiper_cirNavBtns swiper-button-next lhNext'></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-2/5 mb-8 lg:mb-0 flex flex-col'>
            <div>
              <h3 className='sectionSubtitle titleFont mb-5 titleHL animateThis fadeIn'>
                In the Press
              </h3>
            </div>
            <div className='relative grow pressList'>
              <div className='swiper pressSwiper sm:mb-8'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='updateItem flex'>
                      <img
                        src='assets/images/homepage/press/ANI.jpg'
                        className='updateImg shrink-0'
                      />
                      <h3 className='updateHead self-center px-4'>
                        SGT University's Centre for Cosmology and Science
                        Popularization (CCSP) Concludes Successful 2nd Annual
                        International Conference
                      </h3>
                      <a
                        href='https://www.aninews.in/news/business/business/sgt-universitys-centre-for-cosmology-and-science-popularization-ccsp-concludes-successful-2nd-annual-international-conference20231204181412/'
                        target='_blank'
                      ></a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updateItem flex'>
                      <img
                        src='assets/images/homepage/press/HANS.jpg'
                        className='updateImg shrink-0'
                      />
                      <h3 className='updateHead self-center px-4'>
                        Spark of Justice: SGT University Hosts a National Trial
                        Advocacy Competition
                      </h3>
                      <a
                        href='https://www.thehansindia.com/newsvoir?c_article_id=27357&c_author_id=10352&type=old&originurl=https%3a%2f%2fwww.thehansindia.com%2fnewsvoir'
                        target='_blank'
                      ></a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updateItem flex'>
                      <img
                        src='assets/images/homepage/press/dailyhunt.png'
                        className='updateImg shrink-0'
                      />
                      <h3 className='updateHead self-center px-4'>
                        Empowering Individuals for Lifelong Success: SGT
                        University Set to Host Career Coaching and Life
                        Development Conference
                      </h3>
                      <a
                        href='https://m.dailyhunt.in/news/india/english/newsvoir-epaper-newsvoir/empowering+individuals+for+lifelong+success+sgt+university+set+to+host+career+coaching+and+life+development+conference-newsid-n575289324?listname=newspaperLanding&topic=business&index=9&topicIndex=0&mode=pwa&action=click'
                        target='_blank'
                      ></a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updateItem flex'>
                      <img
                        src='assets/images/homepage/press/The-Week-Logo-Big.png'
                        className='updateImg shrink-0'
                      />
                      <h3 className='updateHead self-center px-4'>
                        SGT University Spearheads Sustainable Solutions at the
                        International Conference "RACES-2024"
                      </h3>
                      <a
                        href='https://www.theweek.in/wire-updates/business/2024/02/27/dcm57-sgt-university.html'
                        target='_blank'
                      ></a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='updateItem flex'>
                      <img
                        src='assets/images/homepage/press/timestech-logo.png'
                        className='updateImg shrink-0'
                      />
                      <h3 className='updateHead self-center px-4'>
                        Empowering Tomorrow's Innovators: SGT University
                        Launches New Atal Community Innovation Centre
                      </h3>
                      <a
                        href='https://timestech.in/newsvoir/?c_article_id=26501&c_author_id=10352&type=old&pageid=2&originurl=https%3a%2f%2ftimestech.in%2fnewsvoir%2f'
                        target='_blank'
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-end sm:py-4'>
              <a href='' className='blueBtn'>
                View all
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestHappeningSection;
