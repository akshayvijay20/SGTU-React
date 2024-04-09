import React from "react";

const Footer = () => {
  return (
    <footer class='pageFooter lg:py-14 py-10'>
      <div class='container mx-auto md:px-5 px-3'>
        <div class='grid lg:grid-cols-4 md:grid-cols-3 gap-x-5 md:gap-y-10 gap-y-5 lg:mb-14 mb-5'>
          <div class='footMenu'>
            <div class='titleFont footMenuHead'>Admissions</div>
            <div class='footMenuContent'>
              <ul class='footMenuLinks'>
                <li>
                  <a href='admissions/apply-online.html'>Admission</a>
                </li>
                <li>
                  <a href='admissions/apply-online.html#applicationOpen'>
                    How To Apply
                  </a>
                </li>
                <li>
                  <a
                    href='assets/docs/Fee-Structure-2024-25.pdf'
                    target='_blank'
                  >
                    Course Fee
                  </a>
                </li>
                <li>
                  <a
                    href='assets/docs/Scholarship-Policy-2024-25-12.01.2024-1.pdf'
                    target='_blank'
                  >
                    Scholarship
                  </a>
                </li>
                {/* <!-- <li><a href="assets/docs/Admission-Withdrawal-Cancellation-and-Fee-Refund-Policy-2023-24-for-New-Admissions-1-3-2.pdf" target="_blank">Refund Policy</a></li> --> */}
                <li>
                  <a
                    href='assets/docs/SGT-Infomation-Brochure-2023.pdf'
                    target='_blank'
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href='assets/docs/Notification-Re-constitution-of-RTI-Cell-of-the-University.pdf'
                    target='_blank'
                  >
                    RTI
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='footMenu'>
            <div class='titleFont footMenuHead'>Important Links</div>
            <div class='footMenuContent'>
              <ul class='footMenuLinks'>
                <li>
                  <a href='careers.html'>Careers</a>
                </li>
                <li>
                  <a href='https://www.sgthospital.org/' target='_blank'>
                    Hospital
                  </a>
                </li>
                <li>
                  <a href=''>Infrastructure</a>
                </li>
                <li>
                  <a
                    href='http://www.indianjournals.com/ijor.aspx?target=ijor:ijhs1&type=home'
                    target='_blank'
                  >
                    SGTU Journal
                  </a>
                </li>
                <li>
                  <a href='https://www.acicsgtu.xyz/' target='_blank'>
                    Incubation Cell
                  </a>
                </li>
                <li>
                  <a href='green-environment.html'>Green Environment</a>
                </li>
                <li>
                  <a href='womens-study-center.html'>Women's Study Centre</a>
                </li>
                <li>
                  <a href='students_testimonials.html'>
                    Student's Testimonial Submission
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='footMenu'>
            <div class='titleFont footMenuHead'>Useful Links</div>
            <div class='footMenuContent'>
              <ul class='footMenuLinks'>
                <li>
                  <a href='alumni.html'>Alumni</a>
                </li>
                <li>
                  <a href='grievance-complaints.html'>Grievance/Complaints</a>
                </li>
                <li>
                  <a href='life-at-sgt/accommodation.html#easeofaccess'>
                    Transportation
                  </a>
                </li>
                <li>
                  <a href='assets/docs/2024-holiday-list.pdf' target='_blank'>
                    Holiday List
                  </a>
                </li>
                <li>
                  <a href='matlab.html'>Matlab@SGT</a>
                </li>
                <li>
                  <a href='about/library.html'>Library</a>
                </li>
                <li>
                  <a href='feedback.html'>Feedback</a>
                </li>
              </ul>
            </div>
          </div>

          <div class='footMenu'>
            <div class='titleFont footMenuHead'>Connect With Us</div>
            <div class='footMenuContent'>
              <ul class='footMenuLinks'>
                <li>
                  <a href=''>Contact Us</a>
                </li>
                <li>
                  <a href=''>Exam Corner</a>
                </li>
                <li>
                  <a href='tenders.html'>Tenders</a>
                </li>
                <li>
                  <a href='internal-compliants-committee.html'>
                    Internal Complaint Committee
                  </a>
                </li>
                <li>
                  <a href='https://sgterp.org/sgterp/login' target='_blank'>
                    ERP Login
                  </a>
                </li>
                <li>
                  <a href='' target='_blank'>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='footMenu'>
            <div class='titleFont footMenuHead'>Grow With Us</div>
            <div class='footMenuContent'>
              <ul class='footMenuLinks'>
                <li>
                  <a href='corporate-resource-center.html'>Placements</a>
                </li>
                <li>
                  <a href='careers.html'>Careers</a>
                </li>
                <li>
                  <a href='life-at-sgt/student-welfare-centre.html'>
                    Culture at SGTU
                  </a>
                </li>
                <li>
                  <a href='about/accreditations-ranking.html'>
                    Awards and Ranking
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='footMenu'>
            <div class='titleFont footMenuHead'>Learn With Us</div>
            <div class='footMenuContent'>
              <ul class='footMenuLinks'>
                <li>
                  <a href='research/projects.html'>Research & Innovation</a>
                </li>
                <li>
                  <a href='research/publications.html'>Publications</a>
                </li>
                <li>
                  <a href='https://www.sanrachna.foundation/' target='_blank'>
                    Sanrachna
                  </a>
                </li>
                <li>
                  <a href='https://www.acicsgtu.xyz/' target='_blank'>
                    Entrepreneurship
                  </a>
                </li>
                <li>
                  <a href='about/library.html'>Libraries</a>
                </li>
              </ul>
            </div>
          </div>

          <div class='footContact 2xl:col-span-1 lg:col-span-2 md:col-span-3'>
            <div class='mb-6 mt-10 md:hidden'>
              {/* <img src="assets/images/sgtuFootLogo.svg" alt="" class="footLogo"> */}
            </div>

            <div class='flex flex-row items-center mb-4'>
              <div class='footContactIcon shrink-0 mr-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='36'
                  viewBox='0 0 27 36'
                  fill='#134080'
                >
                  <path d='M15.4951 34.8814C19.0024 30.4921 27.0014 19.854 27.0014 13.8786C27.0014 6.63162 21.1218 0.751953 13.8747 0.751953C6.62771 0.751953 0.748047 6.63162 0.748047 13.8786C0.748047 19.854 8.74713 30.4921 12.2544 34.8814C13.0953 35.9274 14.6541 35.9274 15.4951 34.8814ZM13.8747 9.50308C15.0352 9.50308 16.1482 9.96408 16.9687 10.7847C17.7893 11.6052 18.2503 12.7182 18.2503 13.8786C18.2503 15.0391 17.7893 16.1521 16.9687 16.9726C16.1482 17.7932 15.0352 18.2542 13.8747 18.2542C12.7143 18.2542 11.6013 17.7932 10.7807 16.9726C9.96017 16.1521 9.49918 15.0391 9.49918 13.8786C9.49918 12.7182 9.96017 11.6052 10.7807 10.7847C11.6013 9.96408 12.7143 9.50308 13.8747 9.50308Z' />
                </svg>
              </div>
              <div class=''>
                Budhera, Gurugram-Badli Road, Gurugram- 122505, Haryana, India.
                <div class='mt-1'>
                  <a
                    href='assets/docs/SGT-University-Map.pdf'
                    target='_blank'
                    class='yellowColor'
                  >
                    Campus Map
                  </a>{" "}
                  <span class='mx-2'>|</span>
                  <a
                    href='https://maps.app.goo.gl/87184r231fRBWEc37'
                    target='_blank'
                    class='yellowColor'
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div class='flex flex-row items-center mb-4'>
              <div class='footContactIcon shrink-0 mr-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='#134080'
                >
                  <path d='M24.5389 30.5061C23.2316 30.5061 21.3952 30.0332 18.6453 28.4968C15.3013 26.6216 12.7147 24.8903 9.38882 21.5731C6.18212 18.3684 4.62163 16.2936 2.43761 12.3193C-0.0296978 7.8321 0.390897 5.47998 0.861053 4.4747C1.42095 3.27319 2.24741 2.55457 3.31564 1.84129C3.92239 1.44376 4.56448 1.10299 5.23377 0.823294C5.30074 0.794495 5.36303 0.767036 5.41862 0.742256C5.75014 0.592904 6.25244 0.367203 6.88869 0.608308C7.3133 0.767706 7.69237 1.09387 8.28576 1.67989C9.50268 2.88006 11.1656 5.55298 11.7791 6.86566C12.191 7.75039 12.4636 8.3344 12.4643 8.9894C12.4643 9.75625 12.0785 10.3476 11.6103 10.9859C11.5226 11.1058 11.4355 11.2203 11.3511 11.3315C10.8415 12.0012 10.7296 12.1948 10.8033 12.5403C10.9527 13.2349 12.0664 15.3023 13.8968 17.1287C15.7272 18.9551 17.7351 19.9985 18.4323 20.1472C18.7926 20.2242 18.9902 20.1077 19.6813 19.58C19.7805 19.5043 19.8823 19.4259 19.9888 19.3476C20.7027 18.8165 21.2666 18.4407 22.0154 18.4407H22.0194C22.6711 18.4407 23.2289 18.7234 24.1532 19.1895C25.3587 19.7976 28.112 21.4391 29.3195 22.6574C29.9069 23.2495 30.2344 23.6272 30.3945 24.0511C30.6356 24.6894 30.4085 25.1897 30.2605 25.5245C30.2357 25.5801 30.2083 25.6411 30.1795 25.7087C29.8976 26.3768 29.5548 27.0176 29.1554 27.6228C28.4435 28.6877 27.7222 29.5122 26.518 30.0727C25.8997 30.3652 25.2229 30.5134 24.5389 30.5061Z' />
                </svg>
              </div>
              <div class=''>
                <a href='tel:18001025661'>1800 102 5661</a>
              </div>
            </div>

            <div class='flex flex-row items-center mb-4'>
              <div class='footContactIcon shrink-0 mr-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='33'
                  height='27'
                  viewBox='0 0 33 27'
                  fill='#134080'
                >
                  <path d='M5.87765 0.00292969C4.45192 0.00292969 3.0846 0.569296 2.07646 1.57743C1.06832 2.58557 0.501953 3.9529 0.501953 5.37862V5.91888L16.629 14.6033L32.7561 5.92157V5.37862C32.7561 3.9529 32.1897 2.58557 31.1816 1.57743C30.1735 0.569296 28.8061 0.00292969 27.3804 0.00292969H5.87765ZM32.7561 8.97227L17.2661 17.3127C17.0703 17.4181 16.8514 17.4732 16.629 17.4732C16.4067 17.4732 16.1878 17.4181 15.992 17.3127L0.501953 8.97227V21.5057C0.501953 22.9314 1.06832 24.2988 2.07646 25.3069C3.0846 26.315 4.45192 26.8814 5.87765 26.8814H27.3804C28.8061 26.8814 30.1735 26.315 31.1816 25.3069C32.1897 24.2988 32.7561 22.9314 32.7561 21.5057V8.97227Z' />
                </svg>
              </div>
              <div class=''>
                <a href='mailto:info@sgtuniversity.org'>
                  info@sgtuniversity.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class='md:flex w-full lg:mb-14 mb-10'>
          <div class='md:mr-20 hidden md:block'>
            {/* <img src="assets/images/sgtuFootLogo.svg" alt="" class="footLogo"> */}
          </div>
          <div class='ml-auto'>
            <div class='flex justify-center gap-1 socialIcons'>
              <a
                href='http://www.youtube.com/@SGTUniversityGurgaonNCR'
                target='_blank'
                class='youtube'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z' />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/sgtuniversity/'
                target='_blank'
                class='instagram'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1536 1536'
                  fill='currentColor'
                >
                  <path d='M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181m138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279m108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65M768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5m768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317' />
                </svg>
              </a>
              <a
                href='https://www.facebook.com/sgtuniversitygurgaon'
                target='_blank'
                class='facebook'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  fill='currentColor'
                >
                  <path d='m23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z' />
                </svg>
              </a>
              <a
                href='https://www.linkedin.com/school/sgt-university/'
                target='_blank'
                class='linkedin'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1536 1504'
                  fill='currentColor'
                >
                  <path d='M349 497v991H19V497zm21-306q1 73-50.5 122T184 362h-2q-82 0-132-49T0 191q0-74 51.5-122.5T186 20t133 48.5T370 191m1166 729v568h-329V958q0-105-40.5-164.5T1040 734q-63 0-105.5 34.5T871 854q-11 30-11 81v553H531q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52t87-43.5T1157 474q171 0 275 113.5T1536 920' />
                </svg>
              </a>
              <a
                href='https://twitter.com/SGTUniversity'
                target='_blank'
                class='twitter'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 128 128'
                  fill='currentColor'
                >
                  <path d='M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class='footSEOLinks py-4 mb-5'>
          <div class='fslPart my-4'>
            <div class='titleFont fslHead mb-2'>
              Most Searched Colleges at SGT University
            </div>
            <ul class='fslLinks'>
              <li>
                <a href='engineering/index.html'>Best Engineering College</a>
              </li>
              <li>
                <a href='law/index.html'>Best Law College</a>
              </li>
              <li>
                <a href='agri/index.html'>Best Agriculture College</a>
              </li>
              <li>
                <a href='fashion/index.html'>Best College for Fashion Design</a>
              </li>
              <li>
                <a href='masscomm/index.html'>Best College for Mass Comm</a>
              </li>
              <li>
                <a href='htm/index.html'>Best College for Hotel Management</a>
              </li>
              <li>
                <a href='cm/index.html'>
                  Best College for Commerce & Management
                </a>
              </li>
              <li>
                <a href='education/index.html'>Best College for Education</a>
              </li>
              <li>
                <a href='science/index.html'>Best College for Science</a>
              </li>
              <li>
                <a href='dental/index.html'>Best Dental College</a>
              </li>
              <li>
                <a href='medical/index.html'>Best Medical College</a>
              </li>
              <li>
                <a href='physiotherapy/index.html'>
                  Best Physiotherapy College
                </a>
              </li>
              <li>
                <a href='ims/index.html'>Best Ayurveda College</a>
              </li>
              <li>
                <a href='fnys/index.html'>Best Naturopathy College</a>
              </li>
              <li>
                <a href='nursing/index.html'>Best Nursing College</a>
              </li>
              <li>
                <a href='bhs/index.html'>
                  Best College for Behavioural Sciences
                </a>
              </li>
              <li>
                <a href='ahs/index.html'>Allied Health Sciences</a>
              </li>
            </ul>
          </div>
        </div>

        <div class='sm:flex w-full text-center'>
          <div class='mr-auto'>&copy; 2024 SGT University </div>
          <div class='flex justify-center gap-5'>
            <a href=''>Disclaimer</a> <a href=''>Privacy Policy</a>{" "}
            <a href=''>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
