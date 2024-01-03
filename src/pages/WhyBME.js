import React from "react";
import "./WhyBME.css";
import Ellipse from "../images/ellipse.png";
const WhyBME = () => {
  return (
    <div className="whybme-section">
      <h2 className="why-header">WHY EXPAND TO THE MIDDLE EAST?</h2>
      <div className="container row1">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="card1 custom-card1-2">
              <div className="part1">
                <h3>A Natural Business Hub</h3>
                <p>
                  The geographical location, world-class infrastructure, and
                  highly qualified workforce make the Middle Eastern region an
                  ideal business hub for Europe, Asia, and Africa.
                </p>
              </div>
              <div className="part2"></div>
              <div className="part3"></div>
            </div>{" "}
          </div>
          <div className="col-md-6 col-12">
            <div className="card1 custom-card1">
              <div className="part1">
                <h3>Government Support</h3>
                <p>
                  Governments across the Middle East have implemented policies,
                  and initiatives and provided immense support to create
                  favorably business environments for startups.
                </p>
              </div>
              <div className="part2"></div>
              <div className="part3-2"></div>
            </div>
          </div>
        </div>
        <div className="row row2">
          <div className="col-md-6 col-12">
            <div className="card1 ">
              <div className="part1">
                <h3>Future Potential for Expansion</h3>
                <p>
                  The region presents enormous market potential for startups due
                  to a young, digitally connected population. The region has
                  seen rapid adoption of digital technologies and solutions and
                  this momentum is expected to continue and flourish well into
                  the future.
                </p>
              </div>
              <div className="part2"></div>
              <div className="part3"></div>
            </div>{" "}
          </div>
          <div className="col-md-6 col-12">
            <div className="card1 custom-card1-1 custom-card1-3">
              <div className="part1">
                <h3>100% Foreign Ownership Opportunities</h3>
                <p>
                  Numerous free zones have also been established to attract
                  foreign investment and encourage entrepreneurship. These free
                  zones offer, 100% foreign ownership, 0%-5% cooperation taxes
                  and streamlined regulatory procedures.
                </p>
              </div>
              <div className="part2"></div>
              <div className="part3-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container-why">
        <div className="the-future">
          <h2>THE FUTURE OF THE MIDDLE EAST</h2>
          <p>
            The Middle East is ever-evolving. The region prides itself on
            innovation and aims to remain a future-forward business hub. Some of
            the initiatives already in place include:
          </p>
        </div>
        <div className="the-future-points">
          <div className="contain-points">
            <img src={Ellipse} alt="circle" />
            <p>
              Streamlined entry and residency for skilled professionals,
              entrepreneurs and investors.
            </p>
          </div>
          <div className="contain-points">
            <img src={Ellipse} alt="circle" />
            <p>Special Visa Programs to attract top talent.</p>
          </div>
          <div className="contain-points">
            <img src={Ellipse} alt="circle" />
            <p>
              Focus on advanced technologies and artificial intelligence which
              will attract local and international tech talent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBME;
