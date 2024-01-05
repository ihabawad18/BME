import React from "react";
import "./WhyBME.css";
import Ellipse from "../images/ellipse.png";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
const WhyBME = () => {
  
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
  const { ref: ref5, inView: ref5InView } = useInView({
    threshold: 0.2,
  });
  const { ref: ref6, inView: ref6InView } = useInView({
    threshold: 0.2,
  });

  const helper = (inView) => {
    return `${inView ? "fadeOut fadeIn" : "fadeOut"}`;
  };
  
  
  
  var Message = (
    <p>
      Projected market worth in the UAE of more than{" "}
      <span>$31 billion by 2026 </span>
    </p>
  );

  const [displayMessage, setdisplayMessage] = useState(Message);

  const arrayMessages = [
    <p>
      Projected market worth in the UAE of more than{" "}
      <br/><span>$31 billion by 2026 </span>
    </p>,
    <p>
      Predicted market growth of more than{" "}
      <span>50% between 2020 and 2025 </span> from{" "}
      <span>$8 trillion to $12.8 trillion</span>
    </p>,
    <p>
      <span>30% of global trade</span> passes through the Red Sea and <br/>the Gulf
      of Aden{" "}
    </p>,
    <p>
      Estimated worth of the UAE national{" "}
      <span>digital economy by 2031 is US$140 billion</span>
    </p>,
    <p>
      Contribution of the digital economy to the UAE’s GDP to{" "}
      <span>double from 9.7% to <br/> over 20% by 2031</span>
    </p>,
  ];

  const handleOnClick = (i) => {
    console.log(displayMessage);
    console.log(arrayMessages);
    let temp = "circle" + i;
    let element = document.getElementById(temp);
    const circleElements = document.getElementsByClassName("circle");

    for (var j = 0; j < circleElements.length; j++) {
      circleElements[j].classList.remove("active");
    }
    if (element) {
      setdisplayMessage(arrayMessages[i - 1]);
      console.log(displayMessage);
      element.classList.add("active");
    }
  };

  return (
    <div className="whybme-section">
      <h2 ref={ref1} className={`why-header ${helper(ref1InView)}`}>WHY EXPAND TO THE MIDDLE EAST?</h2>
      <div className="container row1">
        <div ref={ref2} className={`row ${helper(ref2InView)}`}>
          <div className="col-md-6 col-12">
            <div className="card1 custom-card1-2">
              <div className="part1">
                <h3>A Natural Business Hub</h3>
                <p>
                  The geographical location, world-class infrastructure, and
                  highly qualified workforce make the Middle Eastern region an
                  ideal business hub for Europe,<br/> Asia, and Africa.
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
        <div ref={ref3} className={`row row2 ${helper(ref3InView)}`}>
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
      <div ref={ref4} className={`flex-container-why ${helper(ref4InView)}`}>
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

      <h2 ref={ref5} className={`me-stats-header ${helper(ref5InView)}`}>MIDDLE EAST MARKET STATS</h2>
      <div ref={ref6} className={`parent ${helper(ref6InView)}`}>
        <div className="outline">
          <div className="circles-parent">
            <div
              id="circle1"
              className="circle active"
              style={{ "--i": 1 }}
              onClick={() => handleOnClick(1)}
            >
              <h2>1</h2>
            </div>
            <div
              id="circle2"
              className="circle circle2"
              style={{ "--i": 2 }}
              onClick={() => handleOnClick(2)}
            >
              <h2>2</h2>
            </div>
            <div
              id="circle3"
              className="circle circle3"
              style={{ "--i": 3 }}
              onClick={() => handleOnClick(3)}
            >
              <h2>3</h2>
            </div>
            <div
              id="circle4"
              className="circle circle4"
              style={{ "--i": 4 }}
              onClick={() => handleOnClick(4)}
            >
              <h2>4</h2>
            </div>
            <div
              id="circle5"
              className="circle circle5"
              style={{ "--i": 5 }}
              onClick={() => handleOnClick(5)}
            >
              <h2>5</h2>
            </div>
          </div>
        </div>
        <div className="sub-outline">{displayMessage}</div>
      </div>
    </div>
  );
};

export default WhyBME;
