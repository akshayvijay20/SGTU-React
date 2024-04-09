import React from "react";
const CallToAction = () => {
  return (
    <div className='container-fluid lg:py-24 py-16 call-to-action'>
      <img
        src='../../assets/images/faculty/ctaBgImg_1.jpg'
        className='ctaBgImg'
      />
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6'>
        <div className='justify-center'>
          <div className='text-center sm:mb-14 mb-10'>
            <h3 className='sectionTitle'>
              We're here to help you shape the future.
            </h3>
          </div>
          <div className='flex justify-center call-to-action-btn'>
            <a href='#' className='whiteBtn'>
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
