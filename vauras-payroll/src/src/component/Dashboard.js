import React, { useState, useEffect } from "react";
import "../App.css";
import "./Dashboard.css";
import sampleImage from "../image/dashimage.jpg";
import sampleImage1 from "../image/business.avif";
import sampleImage2 from "../image/global.jpg";
import sampleImage3 from "../image/extra1.jpg";
import sampleImage4 from "../image/extra2.jpg";
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

// Chart Component
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

// Carousel Image List
const imageList = [
  { type: "image", src: sampleImage1 },
  { type: "image", src: sampleImage2 },
  { type: "chart" },
  { type: "image", src: sampleImage },
  { type: "image", src: sampleImage3 },
  { type: "image", src: sampleImage4 },
];

function Dashboard() {
  const words = ["hybrid", "modern"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const [prevIndex, setPrevIndex] = useState(currentIndex);


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
  }, [charIndex, wordIndex,words]);

  // const prevImage = () => {
  //   setAnimate(false);
  //   setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  //   setTimeout(() => setAnimate(true), 10);
  // };

  // const nextImage = () => {
  //   setAnimate(false);
  //   setCurrentIndex((prev) => (prev + 1) % imageList.length);
  //   setTimeout(() => setAnimate(true), 10);
  // };

  const prevImage = () => {
    setAnimate(false);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    setTimeout(() => setAnimate(true), 10);
  };

  const nextImage = () => {
    setAnimate(false);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
    setTimeout(() => setAnimate(true), 10);
  };


  const getDisplayedItems = () => {
    const leftIndex = (currentIndex + 1) % imageList.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    return [imageList[leftIndex], imageList[centerIndex], imageList[rightIndex]];
  };

  const [left, center, right] = getDisplayedItems();

  // const renderItem = (item, position) => {
  //   const containerClass = `image-container ${position} ${position === "center" && animate ? "animate-center" : ""}`;

  //   return (
  //     <div className={containerClass}>
  //       {item.type === "image" ? (
  //         <img src={item.src} alt={position} />
  //       ) : (
  //         <GrowthChart />
  //       )}
  //     </div>
  //   );
  // };

  const renderItem = (item, position, index) => {
    let containerClass = "image-container";

    if (position === "center") {
      containerClass += " center";
      if (animate && index !== prevIndex) {
        containerClass += " animate-center";
      }
    } else {
      containerClass += " side";
      if (animate && index === prevIndex) {
        containerClass += " animate-to-side";
      }
    }

    return (
      <div className={containerClass} key={index}>
        {item.type === "image" ? (
          <img src={item.src} alt={position} />
        ) : (
          <GrowthChart />
        )}
      </div>
    );
  };


  return (
    <div className="landing-container">
      <h1>
        Time tracking software for <br />
        the <span className="dynamic-text">{displayedText}</span> workforce
      </h1>
      <p className="subtext">
        Transform outdated payroll practices and build a better workplace for your business with Vauras Payroll.
      </p>

      <div className="button-group">
        <button className="primary-btn">Try For Free</button>
        <button className="secondary-btn">Request Demo</button>
      </div>

      <div className="carousel">
        <button className="carousel-arrow left" onClick={prevImage}>
          &#8249;
        </button>

        {/* <div className="image-group">
          {renderItem(left, "side")}
          {renderItem(center, "center")}
          {renderItem(right, "side")}
        </div> */}
        {renderItem(left, "side", (currentIndex + 1) % imageList.length)}
        {renderItem(center, "center", currentIndex)}
        {renderItem(right, "side", (currentIndex - 1 + imageList.length) % imageList.length)}
        <button className="carousel-arrow right" onClick={nextImage}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
