import React from "react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "./Home.css";
const Home = () => {
  

  return (
    <section className="section-home">
      {/* section 1 */}
      {/* animate__animated animate__bounce */}
      <div className="section-home-1 ">
        {/* <span className="custom-quotation">“</span> */}
        <p className="home-mid-paragraph">
          BME streamlines your Middle East expansion, navigating the
          complexities of local labor laws, compliance, and culture. Our expert
          guidance and powerful network ensure sustainable business growth in
          the region.
        </p>
      </div>

      {/* section 2 */}

      <div className="section-home-2">
        <h2>Our Services</h2>
        <div className="container">
          <div class="row">
            <div class="col-md-6">
              <div className="inside-container">
                <p>01</p>
                <button>Regional Business Development Services</button>
              </div>
            </div>
            <div class="col-md-6">
              <div className="inside-container">
                <p>06</p>
                <button>Professional Mentoring and Counseling</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div className="inside-container">
                <p>02</p>
                <button>Sales Strategy Development</button>
              </div>
            </div>
            <div class="col-md-6">
              <div className="inside-container">
                <p>07</p>
                <button>Setup of local branches and/or offices</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div className="inside-container">
                <p>03</p>
                <button>Marketing Advisory</button>
              </div>
            </div>
            <div class="col-md-6">
              <div className="inside-container">
                <p>08</p>
                <button>Extensive Networking Opportunities</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div className="inside-container">
                <p>04</p>
                <button>Collaboration with companies in the region</button>
              </div>
            </div>
            <div class="col-md-6">
              <div className="inside-container">
                <p>09</p>
                <button>Partnership Opportunities</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div className="inside-container">
                <p>05</p>
                <button>Market Research</button>
              </div>
            </div>
            <div class="col-md-6">
              <div className="inside-container">
                <p>10</p>
                <button>Access to innovative international corporations</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="section-home-3">
        <h2>Why Expand To The Middle East</h2>
        <div className="container">
          {/* 1 */}
          <div class="row">
            <div class="col-md-6">
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
            <div class="col-md-6">
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
          <div class="row">
            <div class="col-md-6">
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
            <div class="col-md-6">
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
        <div className="container-3">
          <p className="home-mid-paragraph">
            “BME was instrumental in streamlining our operations and enhancing
            our market position. Their tailored strategies and industry
            expertise delivered tangible results, surpassing our expectations.
            The BME team’s dedication to our success was clear from day one. We
            highly recommend their services for any business aiming for growth
            and efficiency.”
          </p>
        </div>
        <div className="container-3">
          <div className="section-3-paragraph-footer">
            <div className="white-circle"></div>
            <div className="next-to-circle">
              <h2>Fahed Al Jaafar</h2>
              <h3>CEO of Lino Cosmetics</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
