import React from "react";

const EventSection = () => {
  return (
    <section className='md:py-20 py-10 mb-10 md:mb-0'>
      <div className='container mx-auto px-3'>
        <div className='grid grid-cols-2 lg:grid-cols-4 lg:grid-auto-rows lg:grid-flow-col gap-1 md:gap-5'>
          <div className='lg:col-span-2 lg:row-span-3 lg:order-1 animateThis slideTop'>
            <div className='colgBox colgSwiper_1'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_1.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_2.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_3.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_4.jpg'
                    className='colgBxImg'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-1 lg:row-span-1 lg:order-3 animateThis slideBottom'>
            <div className='colgBox colgSwiper_2'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_5.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_6.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_7.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_8.jpg'
                    className='colgBxImg'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1 lg:row-span-2 lg:order-2 animateThis slideLeft'>
            <div className='colgBox colgBxCenter text-center lg:text-left'>
              <div className='colgBxContent p-6 flex flex-col'>
                <h3 className='colgBxText titleFont mb-auto'>
                  Larger <br className='hidden lg:block' /> than Life Events
                </h3>
                <div className='mt-5'>
                  <a href='' className='circleBtn'>
                    Know more
                  </a>
                </div>
              </div>
              {/* <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="colgBxContent xl:p-6 p-4 flex flex-col">
                                        <h3 className="colgBxText titleFont mb-auto" data-swiper-parallax="-500" data-swiper-parallax-opacity="0">Larger <br> than Life Events</h3>
                                        <div className="mt-5"><a href="" className="circleBtn">Know more</a></div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="colgBxContent xl:p-6 p-4 flex flex-col">
                                        <h3 className="colgBxText titleFont mb-auto" data-swiper-parallax="-500" data-swiper-parallax-opacity="0">Where Innovation<br> meets Creativity</h3>
                                        <div className="mt-5"><a href="" className="circleBtn">Know more</a></div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="colgBxContent xl:p-6 p-4 flex flex-col">
                                        <h3 className="colgBxText titleFont mb-auto" data-swiper-parallax="-500" data-swiper-parallax-opacity="0">State<br> of the Art Infrastructure</h3>
                                        <div className="mt-5"><a href="" className="circleBtn">Know more</a></div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="colgBxContent xl:p-6 p-4 flex flex-col">
                                        <h3 className="colgBxText titleFont mb-auto" data-swiper-parallax="-500" data-swiper-parallax-opacity="0">Passion<br> meets Purpose</h3>
                                        <div className="mt-5"><a href="" className="circleBtn">Know more</a></div>
                                    </div>
                                </div>

                            </div>
                             <div className="colgPagination swiper-pagination"></div> */}
            </div>
          </div>
          <div className='lg:col-span-1 lg:row-span-1 lg:order-4 animateThis slideRight'>
            <div className='colgBox colgSwiper_3' dir='rtl'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_9.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_10.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_11.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_12.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_18.jpg'
                    className='colgBxImg'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-1 lg:row-span-2 lg:order-5 animateThis slideTop'>
            <div className='colgBox colgSwiper_4'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_13.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_14.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_15.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_16.jpg'
                    className='colgBxImg'
                  />
                </div>
                <div className='swiper-slide'>
                  <img
                    src='assets/images/homepage/campus/event_17.jpg'
                    className='colgBxImg'
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
export default EventSection;
