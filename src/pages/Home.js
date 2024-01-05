import React from "react";
import "./Home.css";
import apo from "../images/apo.png";

import { useInView } from "react-intersection-observer";

const Home = () => {
  // Section 3
  const { ref: section3Ref, inView: section3InView } = useInView({
    threshold: 0.6,
  });

  // Section 1
  const { ref: section1Ref, inView: section1InView } = useInView({
    threshold: 0.6,
  });

  // Section 2
  const { ref: section2Ref, inView: section2InView } = useInView({
    threshold: 0.6,
  });

  const helper = (inView) => {
    return `${inView ? "fadeOut fadeIn" : "fadeOut"}`;
  };

  return (
    
      <section className="section-home">
        {/* section 3 */}
        <div ref={section3Ref} className={`section-home-3 ${helper(section3InView)}`}>
          <h2>Why Expand To The Middle East</h2>
          <div className="container">
            {/* 1 */}
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="card1">
                  <div className="part1">
                    <h3>A Natural Business Hub</h3>
                    <p>
                      The geographical location, world-class infrastructure, and
                      highly qualified workforce make the Middle Eastern region
                      an ideal business hub for Europe, Asia, and Africa.
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
            {/* 2 */}
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
                      free zones offer, 100% foreign ownership, 0%-5%
                      cooperation taxes and streamlined regulatory procedures.
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

        {/* section 1 */}
        <div ref={section1Ref} className={`section-home-1 ${helper(section1InView)}`}>
          <p className="home-mid-paragraph">
            BME streamlines your Middle East expansion, navigating the
            complexities of local labor laws, compliance, and culture. Our
            expert guidance and powerful network ensure sustainable business
            growth in the region.
          </p>
        </div>

        {/* section 2 */}
        <div ref={section2Ref} className={`section-home-2 ${helper(section2InView)}`}>
          <h2>Our Services</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="inside-container">
                  <p>01</p>
                  <button>Regional Business Development Services</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inside-container">
                  <p>02</p>
                  <button>Professional Mentoring and Counseling</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="inside-container">
                  <p>03</p>
                  <button>Sales Strategy Development</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inside-container">
                  <p>04</p>
                  <button>Setup of Local Branches and/or offices</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="inside-container">
                  <p>05</p>
                  <button>Marketing Advisory</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inside-container">
                  <p>06</p>
                  <button>Extensive Networking Opportunities</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="inside-container">
                  <p>07</p>
                  <button>
                    Collaboration with Companies <br /> in the Region
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inside-container">
                  <p>08</p>
                  <button>Partnership Opportunities</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="inside-container">
                  <p>09</p>
                  <button>Market Research</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="inside-container">
                  <p>10</p>
                  <button>
                    Access to innovative <br />
                    international corporations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home;
