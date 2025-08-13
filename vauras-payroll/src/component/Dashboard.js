import React, { useState, useEffect, useMemo } from "react";
import "../App.css";
import "./Dashboard.css";
import sampleImage from "../image/logo11.jpg";
import sampleImage1 from "../image/logo12.jpg";
import sampleImage2 from "../image/logo13.jpg";
import sampleImage3 from "../image/logo14.jpg";
import sampleImage4 from "../image/logo15.jpg";
import sampleImage5 from "../image/logo15.jpg";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const GrowthChart = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2"],
    datasets: [
      {
        label: "Company Growth",
        data: [50, 100, 150, 200, 280, 340],
        fill: true,
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "#007bff",
        tension: 0.3,
        pointBackgroundColor: "#007bff",
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

const imageList = [
  { type: "image", src: sampleImage1 },
  { type: "image", src: sampleImage2 },
  { type: "chart" },
  { type: "image", src: sampleImage },
  { type: "image", src: sampleImage3 },
  { type: "image", src: sampleImage4 },
  { type: "image", src: sampleImage5 },
];

function Dashboard() {
  const words = useMemo(() => ["Salary", "Compliances", "Payments"], []);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [,setPrevIndex] = useState(currentIndex);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
        setDisplayedText("");
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, wordIndex, words]);

  const prevImage = () => {
    setDirection("left");
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };

  const nextImage = () => {
    setDirection("right");
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };

  const getIndex = (offset) =>
    (currentIndex + offset + imageList.length) % imageList.length;

  // const renderItem = (item, position, index) => {
  //   let className = "image-container " + position;

  //   if (animate && index === prevIndex) {
  //     className +=
  //       direction === "right"
  //         ? " card-slide-out-right"
  //         : " card-slide-out-left";
  //   } else if (animate && index === currentIndex) {
  //     className +=
  //       direction === "right"
  //         ? " card-slide-in-right"
  //         : " card-slide-in-left";
  //   }

  const renderItem = (item, position, index) => {
    let className = "image-container " + position;
  
    if (position === "center" && animate) {
      className += direction === "right"
        ? " card-slide-in-right"
        : " card-slide-in-left";
    }


   

    return (
      <div className={className} key={position}>
        {item.type === "image" ? (
          <img src={item.src} alt={position} />
        ) : (
          <GrowthChart />
        )}
      </div>
    );
  };


  // const positions = [1, 0, -1];
  // const positionNames = ["left", "center", "right"];

  const positions = [ 1, 0, -1];
const positionNames = [

  "left",
  "center",
  "right",
 
];




  // const positions = [-2,  0,  2];
  // const positionNames = [
  //   "left",

  //   "center",

  //   "right",
  // ];

  return (
    <div className="landing-container">
      <h1>
        Effortless Payroll & Compliance <br />
        <span className="dynamic-text">{displayedText}</span> Automated
      </h1>
      <p className="subtext">
        Simplify Salaries with Accuracy and Practicality, maximize productivity
        while reducing risk
      </p>

      <div className="button-group">
        <button className="primary-btn1">
          <a
            href="https://www.vauras.in/"
            className="link1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Pricing
          </a>
        </button>
        <button className="secondary-btn1">
          <a
            href="https://www.vauras.in/"
            className="link2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Demo
          </a>
        </button>
      </div>

      <div className="carousel">
        <button className="carousel-arrow_left" onClick={prevImage}>
          &#8249;
        </button>

        {positions.map((offset, idx) =>
          renderItem(imageList[getIndex(offset)], positionNames[idx], getIndex(offset))
        )}

       


        <button className="carousel-arrow_right" onClick={nextImage}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
