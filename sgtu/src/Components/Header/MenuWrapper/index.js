import React from "react";
import About from "./About";
import LifeAtSGT from "./LifeAtSGT";
import NIRF from "./NIRF";
import Research from "./Research";
import IQAC from "./IQAC";
import Academics from "./Academics";
import Admissions from "./Admissions";

const MenuWrapper = () => {
  return (
    <div className='menuWrapper'>
      <div className='menuContainer'>
        <ul className='titleFont mainNav'>
          <li className='has-submenu'>
            {" "}
            <About />
          </li>
          <li className='has-submenu'>
            {" "}
            <Academics />
          </li>
          <li className='has-submenu'>
            <Admissions />
          </li>
          <li className='has-submenu'>
            {" "}
            <Research />
          </li>
          <li className='has-submenu'>
            {" "}
            <LifeAtSGT />
          </li>
          <li className='has-submenu'>
            {" "}
            <NIRF />
          </li>
          <li>
            {" "}
            <IQAC />
          </li>
        </ul>
      </div>
      <div className='bottom-nav-links'>
        <ul className='flex xl:gap-14 lg:gap-8 gap-10'>
          <li className='uppercase'>Quick Links &nbsp; ></li>
          <li>
            <a href='a-z_list.html'>A to Z Index</a>
          </li>
          <li>
            <a href=''>Emergency</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MenuWrapper;
