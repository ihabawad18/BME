import React from "react";
import "./About.css";
import SideImage from "../images/bme-logo-01.png";
import { useInView } from "react-intersection-observer";
import Image1 from "../images/BME PHOTOS/Qiddiyah-City-Center-Saudi-Arabia-Facebook.jpeg";
import Image2 from "../images/BME PHOTOS/16.jpeg";
import Image3 from "../images/BME PHOTOS/neom-saudi-arabia-0045.jpeg";

const About = () => {
  
  const { ref: ref1, inView: ref1InView } = useInView({
    threshold: 0.2,
  });


  const { ref: ref2, inView: ref2InView } = useInView({
    threshold: 0.2,
  });

  const { ref: ref3, inView: ref3InView } = useInView({
    threshold: 0.2,
  });
  const { ref: ref4, inView: ref4InView } = useInView({
    threshold: 0.2,
  });

  const helper = (inView) => {
    return `${inView ? "fadeOut fadeIn" : "fadeOut"}`;
  };

  return (
    <div className="about-section">
      <h1 className="about-header">ABOUT US</h1>
      <div ref={ref1} className={`${helper(ref1InView)}`}>
        {/* about container 1 */}
        <div className="container about-container-1">
          <div className="row">
            <div className="col-md-6 col-12">
              <p className="about-first-row-p">
                Bridge Middle East provides expert guidance to companies looking
                to expand into the Middle East.
                <br />
                <br />
                Using our extensive network across the region, We help companies
                build strategic partnerships with innovative international
                corporations.
              </p>
            </div>
            <div className="col-md-3 col-6">
              <div className="about-card1">
                <img src={Image1}/>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="about-card1">
                <img src={Image2}/>
              </div>
            </div>
          </div>
        </div>
        {/* about container 2 */}
        <div className="container about-container-2">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-card2">
                <img src={Image3}/>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <p className="about-second-row-p">
                BME offers a range of business development services,
                partnerships, and networking opportunities which are crucial for
                the success of business in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={ref2} className={`custom-container ${helper(ref2InView)}`}>
        <div className="custom-container2">
          <p>
            We have mastered the steps to a thriving business model here in the
            Middle East. We work closely with our clients to provide the
            services and tools necessary to establish a local presence and
            thrive in this unique market.
          </p>
          <h2>How Can We Help You?</h2>
        </div>

        <img src={SideImage} alt="side photo" />
      </div>
      <p ref={ref3} className={`how-p ${helper(ref3InView)}`}>
        We will simplify your expansion into the Middle East and help you to
        facilitate sustainable business growth.
        <br />
        <br />
        Each country in the region presents a unique set of challenges and
        complexities in terms of local labor laws, compliance requirements, and
        cultural nuances.
        <br />
        <br />
        BME will guide you through every step of the process and connect you
        with a powerful network.
      </p>
      <div ref={ref4} className={`founders-section ${helper(ref4InView)}`}>
        <h2>Our Founders</h2>
        <div className="founders-cards">
          <div className="founder-card">
            <div className="founder-card-image"></div>
            <h3>RAZAQ SALEM</h3>
            <h4>FOUNDER & CEO</h4>
            <p>
              Razaq Salem is the operation director for Diwan Group the biggest
              mcn across Mena. and growth consultant for many startups in the
              region. Razaq’s strong network and connections within the mena
              business community provide startups with invaluable access to
              local resources, knowledge, and potential partnerships.
            </p>
          </div>
          <div className="founder-card">
            <div className="founder-card-image"></div>
            <h3>HRH PRINCE ABDULAZIZ BIN FAISAL BIN ABDUL MAJEED AL SAUD</h3>
            <h4>CHAIRMAN</h4>
            <p>
              HRH Prince Abdulaziz Is Chairman of The Board Of Directors of
              Tharaa Al Watan Group of Companies. As A Contributor To Connecting
              Foreign Companies to the Mena market, his Royal Highness has an
              amazing range of business knowledge and contacts. An International
              Businessman who invests and owns several businesses.
            </p>
          </div>
          <div className="founder-card">
            <div className="founder-card-image"></div>
            <h3>SU KYUNG LEE</h3>
            <h4>MD & BUSINESS COORDINATOR</h4>
            <p>
              Su is an expert business developer and investor with 22 years of
              experience in developing companies in Asia and the Middle East.
              Her vast cultural knowledge, ability to speak Korean, English, and
              German, and extensive network, give Su a unique advantage in
              developing successful businesses in the diverse climate of the
              Middle East.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
