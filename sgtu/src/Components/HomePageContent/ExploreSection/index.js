import React from "react";

const ExploreSection = () => {
  return (
    <section className='exploreSection mb-14 lg:mb-20'>
      {/* <div className="text-center animateThis fadeIn">
                <h2 className="sectionHead mb-5">Explore SGT</h2>
            </div>  */}
      <div
        className='grid md:grid-cols-10 sm:grid-cols-2 grid-cols-1'
        style={{ background: "#000" }}
      >
        <div
          className='exploreFigure md:col-span-5 sm:col-span-1 animateThis fadeIn'
          style={{ transitionDelay: 0 }}
        >
          <img
            src='assets/images/homepage/explore/center_of_excllence.png'
            alt=''
            className='exploreImg'
          />
          <a href='#coePopup' className='explore coePop'>
            <div className='exploreDiscription'>
              <h3 className='titleFont'>Centres of Excellence </h3>
            </div>
          </a>
        </div>
        <div
          className='exploreFigure md:col-span-5 sm:col-span-1 animateThis fadeIn'
          style={{ transitionDelay: 0.2 }}
        >
          <img
            src='assets/images/homepage/explore/office_of_external_affairs.png'
            alt=''
            className='exploreImg'
          />
          <a href='office-of-external-affairs.html' className='explore'>
            <div className='exploreDiscription'>
              <h3 className='titleFont'>Office of External Affairs</h3>
            </div>
          </a>
        </div>
        <div
          className='exploreFigure md:col-span-3 sm:col-span-2 animateThis fadeIn'
          style={{ transitionDelay: 0 }}
        >
          <img
            src='assets/images/homepage/explore/langComm.png'
            alt=''
            className='exploreImg'
          />
          <a
            href='https://sgtuniversity.ac.in/research/introduction.html'
            className='explore'
          >
            <div className='exploreDiscription'>
              <h3 className='titleFont'> Research Prowess</h3>
            </div>
          </a>
        </div>
        <div
          className='exploreFigure md:col-span-4 sm:col-span-1 animateThis fadeIn'
          style={{ transitionDelay: 0.2 }}
        >
          <img
            src='assets/images/homepage/explore/NurturingEnvironment.png'
            alt=''
            className='exploreImg'
          />
          <a href='nuturing-environment.html' className='explore'>
            <div className='exploreDiscription'>
              <h3 className='titleFont'>Nurturing Environment</h3>
            </div>
          </a>
        </div>
        <div
          className='exploreFigure md:col-span-3 sm:col-span-1 animateThis fadeIn'
          style={{ transitionDelay: 0.4 }}
        >
          <img
            src='assets/images/homepage/explore/easeAccess.png'
            alt=''
            className='exploreImg'
          />
          <a href='life-at-sgt/accommodation.html' className='explore'>
            <div className='exploreDiscription'>
              <h3 className='titleFont'>Facility</h3>
            </div>
          </a>
        </div>
      </div>

      <div className='popupContainer hidden rounded lightBlueBg' id='coePopup'>
        <div className='popupScroll'>
          <h3 className='sectionTitle text-center mb-4 sm:mb-10'>
            Centres of Excellence
          </h3>

          <div className='grid sm:grid-cols-3 grid-cols-4 lg:gap-14 sm:gap-8 gap-5 mx-auto mb-4 sm:mb-10 coeGrid'>
            <div className='col-span-2 sm:col-span-1 col-start-2'>
              <a
                href='https://www.ccspsgt.science/'
                target='_blank'
                className='coeBox'
              >
                <img src='assets/images/homepage/explore/ccsp.png' />
              </a>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <a
                href='https://sgtuniversity.ac.in/ceaps/'
                target='_blank'
                className='coeBox'
              >
                <img src='assets/images/homepage/explore/nrsc.png' />
              </a>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <a
                href='https://nrsc.sgtuniversity.ac.in/'
                target='_blank'
                className='coeBox'
              >
                <img src='assets/images/homepage/explore/ceaps.png' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExploreSection;
