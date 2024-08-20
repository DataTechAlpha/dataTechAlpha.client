import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import HighlightedText from '../components/core/HomePage/HighlightedText'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import CTAButton from '../components/core/HomePage/CTAButton';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Banner from '../assets/Images/banner.mp4'
import Footer from '../components/common/Footer'
import ReviewsSlider from '../components/common/ReviewsSlider';
import Spinner from '../components/common/Spinner';
import { getAllReviews } from '../services/operations/otherServices';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'

import companyLogo1 from '../assets/Companies/company-1.png';
import companyLogo2 from '../assets/Companies/company-2.png';
import companyLogo3 from '../assets/Companies/company-3.png';
import companyLogo4 from '../assets/Companies/company-4.png';
import companyLogo5 from '../assets/Companies/company-5.png';
import companyLogo6 from '../assets/Companies/company-6.png';
import companyLogo7 from '../assets/Companies/company-7.png';
import companyLogo8 from '../assets/Companies/company-8.png';
import companyLogo9 from '../assets/Companies/company-9.png';
import companyLogo10 from '../assets/Companies/company-10.png';
import companyLogo11 from '../assets/Companies/company-11.png';
import companyLogo12 from '../assets/Companies/company-12.png';
import companyLogo13 from '../assets/Companies/company-13.png';
import companyLogo14 from '../assets/Companies/company-14.png';

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      setLoading(true);
      const response = await getAllReviews();
      if (response) {
        setReviews(response);
      }
      setLoading(false);
    }
    fetchAllReviews();
  }, [])
// setting from crousle 
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Slow down the speed for smoother scrolling
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    cssEase: 'linear', // Ensures smooth, linear transition
    pauseOnHover: false, // Prevent pause on hover
    responsive: [
      {
        breakpoint: 1024, // For tablets and large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For medium screens, like tablets and smaller laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For small screens, like mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For very small screens, like very small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  
  

  return (
    <div className=' bg-richblack-900 flex flex-col font-inter min-h-screen w-screen'>

      {/* Section 1 - Black color section */}
      <div className='bg-richblack-900' >
        <div className=' relative mx-auto flex flex-col items-center justify-between  w-11/12 max-w-maxContent text-white gap-8' >


          <div className='rounded-full bg-richblack-800 text-richblack-200 mt-16 p-1 mx-auto w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] group transition-all duration-200 hover:scale-95 hover:drop-shadow-none '>
            <Link to={'/signup'}>
              <div className=' flex flex-row items-center gap-2 font-bold rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 '>
                Start you Carrer
                <FaArrowRight />
              </div>
            </Link>
          </div>

          <div className='text-4xl text-center font-semibold' >
            Empower Your Future with
            <HighlightedText text={'Coding Skills'} />
          </div>

          <div className='-mt-3 w-11/12 text-center text-lg text-richblack-300 font-bold'>
            <p className='' >With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
          </div>

          <div className='mt-8 flex flex-row gap-7' >
            <CTAButton active={true} linkto={'/signup'} >
              Learn More
            </CTAButton>

            <CTAButton active={false} linkto={'/login'} >
              Book a Demo
            </CTAButton>
          </div>

          <div className='mx-3 my-7 transition-all duration-200 shadow-[10px_-5px_50px_-5px] shadow-blue-200' >
            <video className='drop-shadow-[20px_20px_rgba(255,255,255)] rounded-md' muted loop autoPlay src={Banner} />
          </div>


          {/* Code Section 1 */}
          <div>
            <CodeBlocks
              flexDir={'lg:flex-row'}

              heading={
                <div className='text-4xl font-semibold text-white' >
                  Unlock Your
                  <HighlightedText text={"coding potential"} />
                  {' '}
                  with our online courses.
                </div>
              }

              subHeading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."

              ctaBtn1={{
                btnText: "Try it Yourself",
                linkto: '/signup',
                active: true
              }}

              ctaBtn2={{
                btnText: "Learn More",
                linkto: '/login',
                active: false
              }}

              codeText={`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<title>This is myPage</title>\n\t</head>\n\t<body>\n\t\t<h1> <a href="/">Header</a> </h1>\n\t\t<nav>\n\t\t\t<a href="/one">One</a>\n\t\t\t<a href="/two">Two</a>\n\t\t\t<a href="/three">Three</a>\n\t\t</nav>\n\t</body>\n</html>`}
              codeColor='text-yellow-25'
              noOfLines={14}
              codeBlockId={'codeblock1'}
            />
          </div>

          {/* Code Section 2 */}
          <div>
            <CodeBlocks
              flexDir={'lg:flex-row-reverse'}

              heading={
                <div className='text-4xl w-full md:w-[60%] font-semibold text-white' >
                  Start
                  <HighlightedText text={"coding in seconds"} />
                </div>
              }

              subHeading="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."

              ctaBtn1={{
                btnText: "Continue Lesson",
                linkto: '/signup',
                active: true
              }}

              ctaBtn2={{
                btnText: "Learn More",
                linkto: '/login',
                active: false
              }}

              codeText={`import CTAButton from './CTAButton';\nimport TypeAnimation from 'react-router-dom';\nimport { FaArrowRight } from 'react-icons/fa';\n\nconst Home = () => {\n\treturn (\n\t\t<div>Home</div>\n\t)\n}\n\nexport default Home`}
              codeColor='text-white'
              noOfLines={11}
              codeBlockId={'codeblock2'}
            />
          </div>

          {/* Unlock the power of code */}
          <ExploreMore />
        </div>
      </div>

      {/* Section 2 - White color section */}
      <div className='bg-pure-greys-5 text-richblue-700' >
        <div className='homepage_bg h-[150px] md:h-[320px]'>
          <div className='w-11/12 pt-[50px] md:pt-[200px] max-w-maxContent mx-auto flex justify-center' >
            <div className='flex flex-row gap-7' >
              <CTAButton active={true} linkto={'/signup'} >
                <div className='flex flex-row items-center gap-2' >
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={'/login'} >
                <div className='text-white' >Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-container my-10">
  <h2 className="carousel-heading">Get a chance to get placed in</h2>
  <Slider {...settings}>
    <img src={companyLogo1} alt='Company 1' className='logo-img'/>
    <img src={companyLogo2} alt='Company 2' className='logo-img'/>
    <img src={companyLogo3} alt='Company 3' className='logo-img'/>
    <img src={companyLogo4} alt='Company 4' className='logo-img'/>
    <img src={companyLogo5} alt='Company 5' className='logo-img'/>
    <img src={companyLogo6} alt='Company 6' className='logo-img'/>
    <img src={companyLogo7} alt='Company 7' className='logo-img'/>
    <img src={companyLogo8} alt='Company 8' className='logo-img'/>
    <img src={companyLogo9} alt='Company 9' className='logo-img'/>
    <img src={companyLogo10} alt='Company 10' className='logo-img'/>
    <img src={companyLogo11} alt='Company 11' className='logo-img'/>
    <img src={companyLogo12} alt='Company 12' className='logo-img'/>
    <img src={companyLogo13} alt='Company 13' className='logo-img'/>
    <img src={companyLogo14} alt='Company 14' className='logo-img'/>
  </Slider>
</div>


        <div className='flex flex-col max-w-maxContent w-11/12 mt-5 md:mt-10 lg:mt-16 mx-auto gap-8 items-center justify-between' >
          <div className='flex flex-row mb-10 justify-between gap-10' >
            <div className='text-4xl font-semibold w-[45%]' >
              Get the skills you need for a
              <HighlightedText text="job that is in demand." />
            </div>

            <div className='flex flex-col gap-10 w-[40%] items-start'>
              <p>The modern Data Tech Alpha  is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
              <CTAButton active={true} linkto={'/signup'} >
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>


      {/* Section 3 - Black color section */}
      <div className='bg-richblack-900' >
        <div className='w-11/12 mt-20 flex flex-col mx-auto max-w-maxContent items-center justify-between gap-8 text-white' >

          {/* Instructor section */}
          <InstructorSection />

          {/* Review section */}
          <div>
            <h2 className='text-center text-3xl md:text-4xl font-semibold mt-8' >
              Reviews from other learners
            </h2>


            {/* Review slider */}
            <div className='' >
              {
                loading ?
                  (
                    <div className='min-h-[150px] grid place-items-center' >
                      <Spinner />
                    </div>
                  )
                  :
                  (
                    <div>
                      <ReviewsSlider reviews={reviews} />
                    </div>
                  )
              }
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Footer section */}
      <div >
        <Footer />
      </div>


    </div>
  )
}

export default Home
