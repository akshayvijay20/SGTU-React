import React from "react";

const ApplyButtonSection = () => {
  return (
    <section
      className='lg:hidden pb-3'
      style={{ background: "var(--darkblue)" }}
    >
      <div className='container mx-auto px-3 applyBtnBox text-center'>
        <a href='admissions/admit-for-md-ms-mds.html' className=''>
          MD / MS / MDS
        </a>
        <a href='admissions/enquiry-form-bds-bams.html' className=''>
          MBBS / BAMS / BDS
        </a>
        <a href='admissions/apply-online.html' className='applyOnlineBtn'>
          APPLY ONLINE
        </a>
      </div>
    </section>
  );
};
export default ApplyButtonSection;
