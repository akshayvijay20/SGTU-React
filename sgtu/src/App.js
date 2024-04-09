import logo from "./logo.svg";
import "./App.css";
import "./homePage.css";
import clgImg from "./sgtu_Logo.png";
import NaacImg from "./NAAC-ICON.png";
import "./common.css";
import "./faculty.css";
import sgtuBannerVideo from "./SGTU_Video_Banner.mp4";
import eventImg from "./event_5.jpg";
import BlogList from "./utils/Blogs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePageContent from "./Components/HomePageContent";
const blogData = [
  {
    title:
      "About BSc Agriculture Course and College: Fees, Eligibility, Syllabus, Scope, Career, and Job Profiles & Course Benefits",
    description:
      "In this blog, we have covered everything about BSc Agriculture Course and College, Fees, Eligibility, Syllabus, Scope, Career, and many more.",
    date: "November 14, 2023",
    likes: 84,
    link: "blogs/about-bsc-agriculture-course-college-fees-eligibility-scope.html"
  },
  {
    title: "Agricultural Food Scientist as a Career Opportunity!",
    description:
      "Agricultural Science and technology is arising as an applied science industry. The primary objective of this domain is to impart professional and technical knowledge of chemical and biological principles so that they can be used in the fields of soils and fertilizers, pests, and control procedures, and crop and livestock production and management.",
    date: "September 26, 2020",
    likes: 153,
    link: "blogs/agricultural-food-scientist-as-a-career-opportunity.html"
  },
  {
    title:
      "Become an Expert – B.Sc (Hons) Agriculture: Eligibility, Salary, Subjects, and Jobs",
    description:
      "B.Sc (Hons) Agriculture: Course, Eligibility, Salary, Subjects, and Jobs. Learn more about the best colleges and career opportunities in India.",
    date: "May 03, 2023",
    likes: 189,
    link: "blogs/bsc-hons-agriculture-eligibility-salary-subjects-jobs.html"
  },
  {
    title: "Differences Between Horticulture and Agriculture",
    description:
      "It is important to understand the difference between the terms horticulture and agriculture. These terms are often a source of confusion among the students and the general public and often end up getting used interchangeably.",
    date: "December 15, 2022",
    likes: 76,
    link: "blogs/difference-between-horticulture-and-agriculture.html"
  },
  {
    title:
      "Importance of Horticulture in India: Its Impact on the Agricultural Sector",
    description:
      "The Importance of Horticulture in Indian can’t be overstated. Since 2012–13, horticulture production has overtaken the production of food grains, and it now makes up around 35% of the overall value of crops produced in the agriculture industry.",
    date: "December 13, 2022",
    likes: 97,
    link: "blogs/importance-of-horticulture-in-india-its-impact-on-agricultural-sector.html"
  },
  {
    title: "Integrated Management of Major Diseases of Rapeseed & Mustard",
    description:
      "Rapeseed and Mustard are the essential oilseed crops of India. The yield of the crops is adversely affected if proper plant protection measures are not followed.",
    date: "April 23, 2022",
    likes: 80,
    link: "blogs/integrated-management-of-major-diseases-of-rapeseed-mustard.html"
  },
  {
    title: "Orobanche Management in Mustard",
    description:
      "Mustard (Brassica juncea) is an oilseed crop being the world’s third most important crop after soybean and palm contributing 28.6% in the total production of oilseeds with 36.6 m ha area, 72.4 mt production with 1980 kg/ha productivity.",
    date: "May 17, 2022",
    likes: 80,
    link: "blogs/orobanche-management-in-mustard.html"
  },
  {
    title: "Scope of Agriculture Courses in India",
    description:
      "What is the Scope of Agriculture Courses in India? Read this blog to learn about the Scope of Agriculture Courses in India.",
    date: "May 8, 2022",
    likes: 80,
    link: "blogs/scope-of-agriculture-courses-in-india.html"
  },
  {
    title:
      "SGT University’s Journey towards ICAR Accreditation for Agriculture Courses",
    description:
      "SGT University Latest News: SGT University Got ICAR Accreditation for Agriculture Courses Bsc hons and MSc Hons in Agriculture",
    date: "May 8, 2022",
    likes: 80,
    link: "blogs/sgt-universitys-journey-towards-icar-accreditation-for-agriculture-courses.html"
  }
];

const App = () => {
  return (
    <div className='App'>
      <Header />
      <HomePageContent />
      <Footer />
    </div>
  );
};
export default App;
