import React from "react";

const About = () => {
  return (
    <>
      <a>About</a>
      <ul className='sub-menu subMenu_L1'>
        <li>
          <a href='about/our-university.html'>Our University</a>
        </li>
        <li>
          <a href='about/our-chancellor.html'>Our Chancellor</a>
        </li>
        <li>
          <a href='about/organizational-structure.html'>
            Organizational Structure
          </a>
        </li>
        <li>
          <a href='about/accreditations-ranking.html'>
            Accreditation & Rankings
          </a>
        </li>
        <li>
          <a href='about/regulations-policies.html'>Regulation & Policy</a>
        </li>
        <li>
          <a href='about/library.html'>Library</a>
        </li>
      </ul>
    </>
  );
};

export default About;
