import React from "react";
const TestimonialSection = () => {
  return (
    <section className='mb-14'>
      {/* <div className="container mx-auto sm:mb-10 mb-5 px-5 text-center animateThis fadeIn">
                <h2 className="sectionHead">Testimonials</h2>
            </div> */}

      <div className='container mx-auto sm:px-5'>
        <div className='flex flex-col lg:flex-row flex-wrap gap-0'>
          <div className='w-full lg:w-1/4 mb-3 lg:mb-0 animateThis slideLeft'>
            <div className='swiper mx-auto testimonialImgSlider'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Agam_Bhatnagar.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Apoorva_Mathur.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Deepak_Sindhu.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Divya_Tayal.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Isha_Duggal.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Komal_Nebhnani.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Monika_Malik_Vigarniya.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Mukesh_Soni.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Nishtha_Kathuria.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Ravinder_Singh.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Sushil_Kumar_Dokwal.png'
                    className='tisImg'
                  />
                </div>
                <div className='swiper-slide tisBox'>
                  <img
                    src='assets/images/homepage/testimonial/Dr_Tanuj_Mendiratta.png'
                    className='tisImg'
                  />
                </div>

                {/* <div className="swiper-slide tisBox"><img src="assets/images/homepage/testimonial/1.png" className="tisImg"/></div>
                                <div className="swiper-slide tisBox"><img src="assets/images/homepage/testimonial/2.png" className="tisImg"/></div>
                                <div className="swiper-slide tisBox"><img src="assets/images/homepage/testimonial/3.png" className="tisImg"/></div>  */}
              </div>
            </div>
          </div>
          <div className='w-full lg:w-3/4 xl:pl-10 lg:pl-5 animateThis slideRight'>
            <div className='swiper testimonialTextSlider'>
              <img src='assets/images/Textures.png' className='ttsbgImg' />
              <div className='swiper-wrapper'>
                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    The Faculty of Dental Sciences at SGT University is rapidly
                    emerging as a pioneer institute in teaching dentistry. I am
                    happy to see the institution progress a long way. The
                    professors are highly qualified and experienced. They
                    utilize the latest technologies and techniques. The dental
                    hospital provides quality practical training. I gained
                    invaluable skills and knowledge at SGT University.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>Agam Bhatnagar</div>
                    <div className='ttsFaculty'>CEO and Director</div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    SGT laid the foundation stone in my career and
                    instrumentalized providing the platform for learning and
                    growing both as individual and as a professional. The campus
                    has excellent infrastructure and facilities for students.
                    There are many opportunities for research and innovation.
                    The faculty members are supportive and accessible. I gained
                    critical thinking and problem-solving abilities at SGT.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>Apoorva Mathur</div>
                    <div className='ttsFaculty'>Scientist C (Medical)</div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    Studying at SGT comprised the best experience of my life. I
                    learned from the best teachers and exposed myself to various
                    clinical and non clinical practices. The dental hospital
                    sees patients with complex cases. We received hands-on
                    training in diagnosis and treatment. There is a big focus on
                    ethical practices. SGT develops well-rounded professionals.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>Dr. Deepak Sindhu</div>
                    <div className='ttsFaculty'>Captain</div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    The University opened up opportunities to explore and
                    broaden my skills. I would relish serving my Alma Mater in
                    any way. The learning environment motivates students to push
                    boundaries. There are exchanges with international
                    universities. I gained perspectives on global healthcare
                    systems. SGT nurtures socially responsible leaders.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>Dr. Divya Tayal</div>
                    <div className='ttsFaculty'>Consultant - IQVIA</div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    My graduation and post graduation from Faculty of Dental
                    Sciences, SGT University shaped my career. The campus
                    facilitated not just academics but personality development.
                    The faculty take interest in each student's growth. There
                    are many co-curricular and extra-curricular activities. I
                    gained self-confidence and adaptability. SGT develops
                    competent clinical professionals.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>Dr. Isha Duggal</div>
                    <div className='ttsFaculty'>Senior Resident</div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    My masters degree course at SGT not only helped me become an
                    accomplished clinician but also grow as a responsible and
                    kind human being. All the love and respect to my dear
                    professors, I feel blessed. The post-graduate program gave
                    in-depth knowledge and specialized skills. We got
                    opportunities to attend conferences and workshops. The
                    hospital has advanced equipment. SGT has an excellent
                    academic environment.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>
                      Dr. Komal Nebhnani
                    </div>
                    <div className='ttsFaculty'>MD & Senior Pedodontist</div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    As a student from the first batch, when it was just a dental
                    college, I saw SGT grow bigger & bigger, turning into an
                    educational hub. Today SGT brands itself with immense pride
                    and glory. The administration works hard to add new programs
                    and infrastructure. Global partnerships allow exchange
                    programs for students. SGT focuses both on world-class
                    education and building character. I feel privileged to be an
                    SGT alumnus.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>
                      Dr. Monika Malik Vigarniya
                    </div>
                    <div className='ttsFaculty'>Senior Resident</div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    The college provided me a lot in every manner. I learned the
                    basics of life and dentistry from here. I cannot thank
                    enough for the grounding the college provided me. The
                    teachers were strict but caring mentors. We gained practical
                    knowledge in the hospital. There were sports and cultural
                    activities on campus. SGT develops competent professionals
                    with ethics.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>Dr. Mukesh Soni</div>
                    <div className='ttsFaculty'>Senior Resident</div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    The college grew leaps and bounds and I feel proud of
                    associating with it. More courses and specializations are
                    being added. Research output has increased substantially.
                    Students gain hands-on clinical work experience. The alumni
                    network is very strong. SGT produces graduates who excel in
                    their fields.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>
                      Dr. Nishtha Kathuria
                    </div>
                    <div className='ttsFaculty'>
                      Assistant Director - MCH and Nutrition
                    </div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    I feel proud saying I am a student of SGT Dental college
                    (Batch 2005). This college provides an excellent environment
                    for all activities including both academics and sports. The
                    campus culture values holistic development. Many alumni hold
                    prestigious professional positions. The administration works
                    to upgrade infrastructure. SGT builds leadership capacity in
                    students.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>
                      Dr. Ravinder Singh
                    </div>
                    <div className='ttsFaculty'>
                      Assistant Commissioner of Police (ACP)
                    </div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    SGT University is an esteemed institution with so many
                    courses and contributes greatly to the nation by providing a
                    professional platform to the country's generation. It draws
                    students from across India. The faculty is highly qualified
                    with practical experience. There are exchanges with foreign
                    universities. SGT develops professionals ready for the
                    global workplace.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>
                      Dr. Sushil Kumar Dokwal
                    </div>
                    <div className='ttsFaculty'>
                      Deputy Civil Surgeon Dental
                    </div>
                  </div>
                </div>

                <div className='swiper-slide ttsContent'>
                  <p className='titleFont'>
                    I am grateful to SGT University for rigorous training and
                    overall development. I must say the university is one of the
                    prestigious institutions of our country imparting education
                    with in-house expertise driving excellence. The dental
                    hospital provides intensive practical training. We gained
                    clinical and soft skills. There are high ethical standards.
                    I was well prepared for a successful career.
                  </p>
                  <div className='ttsInfo'>
                    <div className='ttsAuthor titleFont'>
                      Dr. Tanuj Mendiratta
                    </div>
                    <div className='ttsFaculty'>Lt. Colonel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex'>
            <div className='flex gap-5 ml-auto mt-5 w-auto md:flex hidden'>
              <button className='swiper_cirNavBtns swiper-button-prev ttsPrev'></button>
              <button className='swiper_cirNavBtns swiper-button-next ttsNext'></button>
            </div>

            <div className='swiper-pagination staticPagination ttsPagination md:hidden'></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
