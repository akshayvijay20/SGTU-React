import React from "react";
import HeroSection from "./HeroSection";
import CallToAction from "./CallToAction";
import CRCSection from "./CRCSection";
import DistinguishedPersonalitiesSection from "./DistinguishedPersonalitiesSection";
import ScrollToTop from "./ScrollToTop";
import EventSection from "./EventSection";
import ApplyButtonSection from "./ApplyButtonSection";
import ExploreSection from "./ExploreSection";
import FacultySection from "./FacultySection";
import LatestHappeningSection from "./LatestHappeningSection";
import StatSection from "./StatSection";
import TestimonialSection from "./TestimonialSection";
import "../../App.css";

const HomePageContent = () => {
  return (
    <main className='pageWrapper stickyAnchor' id='sticky-anchor'>
      <HeroSection />
      <ApplyButtonSection />
      <StatSection />
      <FacultySection />
      <LatestHappeningSection />
      <EventSection />
      <ExploreSection />
      <DistinguishedPersonalitiesSection />
      <CRCSection />
      <TestimonialSection />
      <CallToAction />
      <ScrollToTop />
    </main>
  );
};
export default HomePageContent;
