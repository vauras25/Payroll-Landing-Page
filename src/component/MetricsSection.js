// import React from "react";
// import "../App.css"; 

// const MetricsSection = () => {
//   return (
//     <div className="metrics-container">
//       <p className="metrics-header">
//         Time tracking & productivity metrics trusted by 112,000+ businesses
//       </p>
//       <div className="metrics-grid">
//         <div className="metric-item">
//           <h2>500K+</h2>
//           <p>Active users</p>
//         </div>
//         <div className="metric-item">
//           <h2>21M+</h2>
//           <p>Total hours tracked</p>
//         </div>
//         <div className="metric-item">
//           <h2>4M+</h2>
//           <p>Tasks completed</p>
//         </div>
//         <div className="metric-item">
//           <h2>300K+</h2>
//           <p>Payments</p>
//         </div>
//       </div>

//       <div className="logo-container">
//         <img src="/logos/ahrefs.png" alt="ahrefs" />
//         <img src="/logos/instacart.png" alt="instacart" />
//         <img src="/logos/groupon.png" alt="groupon" />
//         <img src="/logos/century21.png" alt="century 21" />
//         <img src="/logos/cleardesk.png" alt="cleardesk" />
//         <img src="/logos/oneims.png" alt="one ims" />
//         <img src="/logos/ring.png" alt="ring" />
//       </div>
//     </div>
//   );
// };

// export default MetricsSection;


import React, { useState, useEffect, useRef } from "react";
import "../App.css"; 
import logo1 from '../image/logo1.svg';
import logo2 from '../image/logo2.svg';
import logo3 from '../image/logo3.svg';
import logo4 from '../image/logo4.svg';
import logo5 from '../image/logo5.svg';
import logo6 from '../image/logo6.svg';
import logo7 from '../image/logo7.svg';

const MetricsSection = () => {
  const [isInView, setIsInView] = useState(false);

  const metricsRef = useRef(null);

  const metricsData = [
    { label: "Active users", value: 500000 },
    { label: "Total hours tracked", value: 21000000 },
    { label: "Tasks completed", value: 4000000 },
    { label: "Payments", value: 300000 },
  ];

  const handleCountUp = (target) => {
    const elements = target.querySelectorAll('.metric-item h2');
    elements.forEach((el, index) => {
      let start = 0;
      const end = metricsData[index].value;
      const duration = 2000; // duration of counting in ms
      const increment = Math.ceil(end / duration * 100); // increment per 100ms

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          start = end;
        }
        el.textContent = start.toLocaleString(); // format with commas
      }, 100);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // stop observing after it's in view
      }
    }, { threshold: 0.5 });

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      handleCountUp(metricsRef.current);
    }
  }, [isInView]);

  return (
    <div className="metrics-container" ref={metricsRef}>
      <p className="metrics-header">
        Time tracking & productivity metrics trusted by 112,000+ businesses
      </p>
      <div className="metrics-grid">
        {metricsData.map((metric, index) => (
          <div className="metric-item" key={index}>
            <h2>0</h2>
            <p>{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="logo-container">
        <img src={logo1} alt="ahrefs" />
        <img src={logo2} alt="instacart" />
        <img src={logo3} alt="groupon" />
        <img src={logo4} alt="century 21" />
        <img src={logo5} alt="cleardesk" />
        <img src={logo6} alt="one ims" />
        <img src={logo7} alt="ring" />
      </div>
    </div>
  );
};

export default MetricsSection;

