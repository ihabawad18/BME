import React from "react";
import "./Home.css";
import apo from "../images/apo.png";
import image1 from "../images/BME PHOTOS/image-home-1.jpg";
import image2 from "../images/BME PHOTOS/image-home-2.jpg";
import image3 from "../images/BME PHOTOS/image-home-3.jpg";
import image4 from "../images/BME PHOTOS/new-murabba-riyadh.jpg"
import Ellipse from "../images/ellipse.png";
import { useInView } from "react-intersection-observer";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 771, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // Section 3
  const { ref: section3Ref, inView: section3InView } = useInView({
    threshold: 0.2,
  });

  // Section 1
  const { ref: section1Ref, inView: section1InView } = useInView({
    threshold: 0.2,
  });

  // Section 2
  const { ref: section2Ref, inView: section2InView } = useInView({
    threshold: 0.2,
  });

  const helper = (inView) => {
    return `${inView ? "fadeOut fadeIn" : "fadeOut"}`;
  };

  return (
    <section className="section-home">
      {/* about us */}
      <div
        ref={section3Ref}
        className={`section-home-3 ${helper(section3InView)}`}
      >
        <div className="home-about-section">
          <h2>About Us</h2>
          <p className="home-about-p">
            BME is a corporate service provider in the Middle East. We are
            building strategic partnerships with innovative international
            companies. Our partnership expands companies ME market entry,
            regional business development, marketing, and sales.
          </p>
          <p className="home-about-p2">
            BME is always working together forward to make our successful
            business stories in the region.
          </p>

          <div className="about-container-home">
            <img src={image1} />
            <img src={image3} />
            <img src={image2} />
          </div>
          <div className="about-line"></div>
        </div>
      </div>

      {/* section 3 */}
      {/* <div
        ref={section3Ref}
        className={`section-home-3 ${helper(section3InView)}`}
      >
        <h2>Why Expand To The Middle East</h2>
        <div className="container">
                   <div className="row">
            <div className="col-md-6 col-12">
              <div className="card1">
                <div className="part1">
                  <h3>A Natural Business Hub</h3>
                  <p>
                    The geographical location, world-class infrastructure, and
                    highly qualified workforce make the Middle Eastern region an
                    ideal business hub for Europe, Asia, and Africa.
                  </p>
                </div>
                <div className="part2"></div>
              </div>{" "}
            </div>
            <div className="col-md-6 col-12">
              <div className="card1">
                <div className="part1">
                  <h3>Future Potential for Expansion</h3>
                  <p>
                    The region presents enormous market potential for startups
                    due to a young, digitally connected population. The region
                    has seen rapid adoption of digital technologies and
                    solutions and this momentum is expected to continue and
                    flourish well into the future.
                  </p>
                </div>
                <div className="part2"></div>
              </div>
            </div>
          </div>
        
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="card1">
                <div className="part1">
                  <h3>Government Support</h3>
                  <p>
                    Governments across the Middle East have implemented
                    policies, and initiatives and provided immense support to
                    create favorably business environments for startups.
                  </p>
                </div>
                <div className="part2"></div>
              </div>{" "}
            </div>
            <div className="col-md-6 col-12">
              <div className="card1">
                <div className="part1">
                  <h3>100% Foreign Ownership Opportunities</h3>
                  <p>
                    Numerous free zones have also been established to attract
                    foreign investment and encourage entrepreneurship. These
                    free zones offer, 100% foreign ownership, 0%-5% cooperation
                    taxes and streamlined regulatory procedures.
                  </p>
                </div>
                <div className="part2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-container">
          <button>Learn More</button>
        </div>
      </div>
 */}
      {/* section 1 */}

      {/* <div className={`section-home-1`}>
        <p className="home-mid-paragraph">
          "BME streamlines your Middle East expansion, navigating the
          complexities of local labor laws, compliance, and culture. Our expert
          guidance and powerful network ensure sustainable business growth in
          the region."
        </p>
      </div> */}

      {/* why expand to the middle east section */}
      <div
        ref={section1Ref}
        className={`section-home-4 ${helper(section1InView)}`}
      >
        <h2>Why Expand To The Middle East</h2>
        <div className="why-outer">
          <div className="why-inner">
            <img src={image4}/>
          </div>
          <div className="why-content">
            <div className="left-contain">
              <h3>Government Support</h3>
              <p>
                Governments across the Middle East have implemented policies,
                and initiatives and provided immense support to create favorably
                business environments for startups.
              </p>
            </div>
            <img className="why-ellipse" src={Ellipse} alt="circle" />
          </div>
          <div className="why-content">
            <div className="left-contain">
              <h3>100% Foreign Ownership Opportunities</h3>
              <p>
                Numerous free zones have also been established to attract
                foreign investment and encourage entrepreneurship. These free
                zones offer, 100% foreign ownership, 0%-5% cooperation taxes and
                streamlined regulatory procedures.
              </p>
            </div>
            <img className="why-ellipse" src={Ellipse} alt="circle" />
          </div>
          <div className="why-content">
            <img className="why-ellipse" src={Ellipse} alt="circle" />
            <div className="left-contain">
              <h3>A Natural Business Hub</h3>
              <p>
                The geographical location, world-class infrastructure, and
                highly qualified workforce make the Middle Eastern region an
                ideal business hub for Europe, Asia, and Africa.
              </p>
            </div>
          </div>
          <div className="why-content">
            <img className="why-ellipse" src={Ellipse} alt="circle" />
            <div className="left-contain">
              <h3>Future Potential for Expansion</h3>
              <p>
                The region presents enormous market potential for startups due
                to a young, digitally connected population. The region has seen
                rapid adoption of digital technologies and solutions and this
                momentum is expected to continue and flourish well into the
                future.
              </p>
            </div>
          </div>
          {/* <img className="why-ellipse" src={Ellipse} alt="circle" /> */}
          {/* <img className="why-ellipse" src={Ellipse} alt="circle" />
              <img className="why-ellipse" src={Ellipse} alt="circle" />
              <img className="why-ellipse" src={Ellipse} alt="circle" />
 */}
        </div>
      </div>
      {/* section 2 */}
      <div
        ref={section2Ref}
        className={`section-home-2 ${helper(section2InView)}`}
        // className="section-home-2"
      >
        <h2>Our Services</h2>
        <div className="services-slider">
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <div className="services-slide">
                  <h3>{item.number}</h3>
                  <p>{item.paragraph}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    number: "01",
    paragraph: "Regional Business Development Services",
  },
  {
    number: "02",
    paragraph: "Professional Mentoring and Counseling",
  },
  {
    number: "03",
    paragraph: "Sales Strategy Development",
  },
  {
    number: "04",
    paragraph: "Setup of Local Branches and/or offices",
  },
  {
    number: "05",
    paragraph: "Marketing Advisory",
  },
  {
    number: "06",
    paragraph: "Extensive Networking Opportunities",
  },
  {
    number: "07",
    paragraph: "Collaboration with Companies in the Region",
  },
  {
    number: "08",
    paragraph: "Partnership Opportunities",
  },
  {
    number: "09",
    paragraph: "Market Research",
  },
  {
    number: "10",
    paragraph: "Access to innovative international corporations",
  },
];

export default Home;
