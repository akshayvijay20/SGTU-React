import React from "react";
const CRCSection = () => {
  return (
    <section className='crcSection mb-14 lg:mb-20'>
      <div className='container mx-auto px-3'>
        <div className='grid lg:grid-cols-6 grid-cols-1 xl:gap-8 md:gap-6 gap-6'>
          <div className='lg:col-span-2 animateThis slideLeft'>
            <a href='corporate-resource-center.html' className='crcTile'>
              <img
                src='assets/images/homepage/corporate/corporateBgImg.jpg'
                className='crcTileImg'
              />
              <div className='crcTileText'>
                <h2 className='titleFont sectionTitle text-white'>
                  Corporate Resource Centre
                </h2>
                <span className='circleBtn'>Know more</span>
              </div>
            </a>
          </div>
          <div className='lg:col-span-4 animateThis slideTop'>
            <div className='swiper crcRecruiterSwiper titleFont'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='crcTestim flex flex-col'>
                    <div className='grow pb-4'>
                      <p>
                        Wonderful hospital with friendly staff and excellent
                        infrastructure. The student quality is great, and we
                        intend to visit campus soon!
                      </p>
                    </div>
                    <div className='flex items-center pb-4'>
                      <div className='crcTestimLogo'>
                        <img
                          src='assets/images/homepage/recruiters/Medanta_Hospital.png'
                          alt=''
                        />
                      </div>
                      <div className='pl-5'>
                        {" "}
                        <h4 className='titleFont'>Medanta Hospital</h4>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='swiper-slide'>
                  <div className='crcTestim flex flex-col'>
                    <div className='grow pb-4'>
                      <p>
                        Mr. Sourav Sinha (Terminix SIS Ltd): The process was
                        conducted smoothly by the CRC Department. Students of
                        the Agricultural Science Department were very keen
                        regarding the job and had great subject knowledge.
                      </p>
                    </div>
                    <div className='flex items-center pb-4'>
                      <div className='crcTestimLogo'>
                        <img
                          src='assets/images/homepage/recruiters/Venkateswara_Hospital.png'
                          alt=''
                        />
                      </div>
                      <div className='pl-5'>
                        {" "}
                        <h4 className='titleFont'>
                          Venkateswara Hospital
                        </h4>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='swiper-slide'>
                  <div className='crcTestim flex flex-col'>
                    <div className='grow pb-4'>
                      <p>
                        Ms. Sabina (Mindeye Solutions - LISSUN): Had a wonderful
                        experience with the placement staff of SGT University.
                        Students of the Behavioural Science Department have the
                        potential and learning attitude.
                      </p>
                    </div>
                    <div className='flex items-center pb-4'>
                      <div className='crcTestimLogo'>
                        <img
                          src='assets/images/homepage/recruiters/ADS_Squad.png'
                          alt=''
                        />
                      </div>
                      <div className='pl-5'>
                        <h4 className='titleFont'>ADS Squad</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='swiper-slide'>
                  <div className='crcTestim flex flex-col'>
                    <div className='grow pb-4'>
                      <p>
                        Students performed very well and were good at
                        communication. The CRC department was very helpful
                        during the time of placement drive.
                      </p>
                    </div>
                    <div className='flex items-center pb-4'>
                      <div className='crcTestimLogo'>
                        <img
                          src='assets/images/homepage/recruiters/hike_education.png'
                          alt=''
                        />
                      </div>
                      <div className='pl-5'>
                        {" "}
                        <h4 className='titleFont'>Hike Education</h4>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='swiper-slide'>
                  <div className='crcTestim flex flex-col'>
                    <div className='grow pb-4'>
                      <p>
                        Ms. Tanishi Suneja (Reliance): Great Hospitality,
                        Students at SGT University are really good and
                        interested. We would look forward to visiting the Campus
                        again.
                      </p>
                    </div>
                    <div className='flex items-center pb-4'>
                      <div className='crcTestimLogo'>
                        <img
                          src='assets/images/homepage/recruiters/safeway.png'
                          alt=''
                        />
                      </div>
                      <div className='pl-5'>
                        {" "}
                        <h4 className='titleFont'>
                          Safeway Insurance TPA Janakpuri West Delhi
                        </h4>{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='swiper-slide'>
                  <div className='crcTestim flex flex-col'>
                    <div className='grow pb-4'>
                      <p>
                        We had an exceptional experience today with SGT
                        University. It surpassed our expectations as we embarked
                        on our first endeavour to scout for potential candidates
                        here. The calibre and enthusiasm displayed by the
                        students was truly remarkable. We are keen to establish
                        a long-term partnership that will enable us to
                        continuously recruit outstanding individuals from this
                        institution for years to come.
                      </p>
                    </div>
                    <div className='flex items-center pb-4'>
                      <div className='crcTestimLogo'>
                        <img
                          src='assets/images/homepage/recruiters/Untitled-design.jpg'
                          alt=''
                        />
                      </div>
                      <div className='pl-5'>
                        {" "}
                        <h4 className='titleFont'>Jubilant Biosys</h4>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='crcRecruiterPagination swiper-pagination'></div>
            </div>
          </div>
          <div className='lg:col-span-6 animateThis fadeIn'>
            <div className='swiper crcLogoSwiper'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/accenture.png'
                    className='crcLogoImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/Amazon.svg'
                    className='crcLogoImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/Deloitte.png'
                    className='crcLogoImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/Medanta.png'
                    className='crcLogoImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/TCS.png'
                    className='crcLogoImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/Wipro.svg'
                    className='crcLogoImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/IBM.png'
                    className='crcLogoImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/DLF.png'
                    className='crcLogoImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/placements/TechMahindra.png'
                    className='crcLogoImg'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CRCSection;
