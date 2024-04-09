import React from "react";
const Admissions = () => {
  return (
    <>
      <a href='#'>Admissions</a>
      <ul className='sub-menu subMenu_L1'>
        <li>
          <a href='admissions/apply-online.html'>Apply Online</a>
        </li>
        <li>
          <a href=''>Explore Programs</a>
        </li>
        <li className='has-submenu'>
          <a href='#'>Fees Structure</a>
          <div className='sub-menu subMenu_L2'>
            <div className='tab-header flex flex-col sm:flex-row items-center'>
              <h4 className='subMenuTitle self-start'>
                {" "}
                <button className='shiftBack'></button>
                Fees Structure
              </h4>
              <div className='flex gap-3'>
                <button rel='nonmedicalFaculty' className='menuTabBtn active1'>
                  Non Medical
                </button>
                <button rel='medicalFaculty' className='menuTabBtn'>
                  Medical
                </button>
              </div>
            </div>
            <div className='accordion-container'>
              <div className='accordion nonmedicalFaculty'>
                <div className='xl:flex 2xl:gap-20 xl:gap-10'>
                  <div className='xl:w-1/2 w-full'>
                    <div className='accordion-item'>
                      ds
                      <div className='accordion-header'>
                        Agricultural Sciences
                      </div>
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Providing competitive human capital for a changing
                        sector with courses that are in line with national
                        regulations and standards, the Faculty of Agriculture
                        Sciences (FASC) is a preferred destination.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/agriculture.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Behavioural and Social Sciences
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Meeting the growing need for mental health services in
                        the community, society, and country by providing young
                        graduates with advanced clinical training in psychology
                        and counselling.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/behavioural-science.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Commerce & Management
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Fostering and developing skilled and socially
                        responsible managers that can support global business
                        practices supported by Indian knowledge (Gyan), wisdom
                        (Buddhi), and consciousness (Vivek).
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/commerce-and-management.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>Education</div>
                    <div className='accordion-content'>
                      <p>
                        Learn to be a moulder of great minds from the best in
                        education. Teachers are prepared to affect change in
                        their classNamerooms as well as in local and
                        international communities through a mix of theory and
                        practice.{" "}
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/faculty-of-education.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Engineering & Technology
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Innovate, create, and make. All in one place. All for a
                        better tomorrow. Developing skilled and qualified
                        engineers in disruptive technologies. Our various
                        Centres of Excellence will only add to your learning.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/engineering.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='xl:w-1/2 w-full'>
                  <div className='accordion-item'>
                    <div className='accordion-header'>Fashion & Design</div>
                    <div className='accordion-content'>
                      <p>
                        Make your grand entry into the glamour industry with a
                        fashion degree from SGT. Experience the entire design
                        cycle, from the initial concept to the finished item,
                        while also working with our in-house brand.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/fashion-design.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Hotel & Tourism Management
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Providing hospitality education that is linked to market
                        needs and trends. FHTM has ties with national and
                        international organisations and provides knowledge input
                        from the most renowned experts in the field.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/hotel-and-tourism-management.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>Law</div>
                    <div className='accordion-content'>
                      <p>
                        Join a career that requires your absolute best, with an
                        institute that will teach you how. SGT provides a
                        professional legal education that prepares you for
                        transnational practice and the challenges of
                        globalization.
                      </p>
                      <div className='accordion-link'>
                        <a href='assets/docs/fees/law.pdf' target='_blank'>
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Mass Communication & Media Technology
                    </div>
                    <div className='accordion-content'>
                      <p>
                        An education in filmmaking, television, and radio
                        production, and digital and print journalism, with
                        leading experts, pedagogies, and one of the largest film
                        and television shooting floors in North India.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/mass-communication.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>Science</div>
                    <div className='accordion-content'>
                      <p>
                        Nurturing and delivering sincere and responsible
                        professionals with excellent technical skills and
                        profound human values that are capable of making
                        noteworthy contributions to various scientific sectors.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/faculty-of-science.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='accordion medicalFaculty'>
              <div className='xl:flex 2xl:gap-20 xl:gap-10'>
                <div className='xl:w-1/2 w-full'>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Allied Health Sciences
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Providing multidisciplinary quality education, clinical
                        exposure, and research support with top universities,
                        thereby bridging the demand for Allied Health Care
                        professionals nationally and internationally.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/allied-health-science.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>Dental Sciences</div>
                    <div className='accordion-content'>
                      <p>
                        A vital academic department that is crucial in advancing
                        knowledge and understanding of dental sciences, training
                        competent dental professionals, and providing
                        high-quality dental care to the community.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/dental-science.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Indian Medical System (Ayurveda)
                    </div>
                    <div className='accordion-content'>
                      <p>
                        If you believe in the powers of Ayurveda, there is no
                        better place for you to learn. Get access to an
                        exclusive herbal garden facility along with an in-house
                        research hospital for exploration and discovery.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/indian-medical-system.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Medicine & Health Sciences
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Job-oriented courses, overseen by highly qualified and
                        specialised senior medical faculty, who also serve
                        affordable care to the marginalized in one of the
                        largest multispecialty hospitals.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/medicine-and-health-sciences.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='xl:w-1/2 w-full'>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      Naturopathy & Yogic Sciences
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Comprehensive training in indigenous practices, with a
                        special emphasis on their applications in healing. Our
                        75-acre campus serves as the perfect backdrop for
                        learning about the power of nature.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/naturopathy.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>Nursing</div>
                    <div className='accordion-content'>
                      <p>
                        Learn about the latest, evidence-based practices from
                        Haryana's best nursing school. Work with our passionate
                        and learned faculty in our community and child-health
                        nursing labs, and the one-of-a-kind NRSC.
                      </p>
                      <div className='accordion-link'>
                        <a href='assets/docs/fees/nursing.pdf' target='_blank'>
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>Physiotherapy</div>
                    <div className='accordion-content'>
                      <p>
                        A physiotherapy course at SGT guarantees regular
                        interaction with leading experts and extensive research
                        opportunities. Rehab services are a thriving market, and
                        we can help you make your mark in it.
                      </p>
                      <div className='accordion-link'>
                        <a
                          href='assets/docs/fees/physiotherapy.pdf'
                          target='_blank'
                        >
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header'>
                      SGT College of Pharmacy
                    </div>
                    <div className='accordion-content'>
                      <p>
                        Among the best pharmacy schools in the country, it
                        grants undergraduate and graduate pharmacy degrees that
                        are recognized by the Pharmacy Council of India, in
                        addition to doctoral degrees in philosophy, pharmacy,
                        and medicine.{" "}
                      </p>
                      <div className='accordion-link'>
                        <a href='assets/docs/fees/pharmacy.pdf' target='_blank'>
                          View Fees
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default Admissions;
