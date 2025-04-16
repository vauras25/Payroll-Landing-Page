import React, { useState } from "react";
import "./RightSideAnimation.css";
import sampleImage1 from "./extra2.jpg";
import sampleImage2 from "./turf-grass-lawn-grass-for-ground.jpg";
import sampleImage3 from "./image1.jpg";
import sampleImage4 from "./attendence.jpg";
import sampleImage5 from "./salary.jpg";

const cardsData = [
  {
    img: sampleImage1,
    title: "AI-Assisted Recruiting",
    desc: "Transform the way you recruit with cutting-edge tools.",
  },
  {
    img: sampleImage2,
    title: "Employee Engagement",
    desc: "Drive team alignment and motivation.",
  },
  {
    img: sampleImage3,
    title: "HR Analytics & Insights",
    desc: "Get the insights you need to strategize.",
  },
  {
    img: sampleImage4,
    title: "Attendance Management",
    desc: "Track time and attendance effectively.",
  },
  {
    img: sampleImage5,
    title: "Salary & Payroll",
    desc: "Simplify and automate payroll processing.",
  },
];

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState(null);
  const [tempCards, setTempCards] = useState([]);

  const handleNext = () => {
    if (currentIndex < cardsData.length - 3 && !isAnimating) {
      setIsAnimating(true);
      setAnimationType("shrink-in");
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setAnimationType(null);
        setIsAnimating(false);
      }, 1000);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isAnimating) {
      const currentCards = cardsData.slice(currentIndex - 1, currentIndex + 2);
      setTempCards(currentCards);
      setIsAnimating(true);
      setAnimationType("shrink-out");

      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setTempCards([]);
        setAnimationType(null);
        setIsAnimating(false);
      }, 1000);
    }
  };

  const getDisplayedCards = () => {
    if (animationType === "shrink-out" && tempCards.length > 0) {
      return tempCards;
    }
    return cardsData.slice(currentIndex, currentIndex + 3);
  };

  return (
    <div className="carousel-container">
      <div className="content-wrapper">
        <div className="left-panel">
          <div className="left-panel-content">
            <h2>
              Explore the Latest<br />Tools to Support<br />Your Team
            </h2>
            <p>
              Powerful solutions to help reduce the average $4,683 and 44 days it takes to hire.*
            </p>
          </div>
          <div className="arrow-buttons">
            <button
               className="arrow"
              onClick={handleNext}
              disabled={currentIndex >= cardsData.length - 3 || isAnimating}
            >
              ←
            </button>
            <button
            className="arrow"
            onClick={handlePrev}
            disabled={currentIndex === 0 || isAnimating}
             
            >
              →
            </button>
          </div>
        </div>

        <div className="carousel">
          {getDisplayedCards().map((card, idx) => {
            let cardClass = "card";
            if (animationType === "shrink-in" && idx === 0) {
              cardClass += " shrink-in";
            } else if (animationType === "shrink-out" && idx === 0) {
              cardClass += " shrink-out";
            }

            return (
              <div className={cardClass} key={idx}>
                <img src={card.img} alt={card.title} />
                <div className="card-body">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
