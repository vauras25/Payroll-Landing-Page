import React, { useState, useEffect, useRef, useCallback ,useMemo} from "react";
import "../MetricsSection/MetricsSection.css";
import logo1 from './image/logo1.svg';
import logo2 from './image/logo2.svg';
import logo3 from './image/logo3.svg';
import logo4 from './image/logo4.svg';
import logo5 from './image/logo5.svg';
import logo6 from './image/logo6.svg';
import logo7 from './image/logo7.svg';

const MetricsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const metricsRef = useRef(null);

  // const metricsData = [
  //   { label: "Active users", value: 500000 },
  //   { label: "Total hours tracked", value: 21000000 },
  //   { label: "Tasks completed", value: 4000000 },
  //   { label: "Payments", value: 300000 },
  // ];



  const metricsData = useMemo(() => [
    { label: "Active users", value: 500000 },
    { label: "Total hours tracked", value: 21000000 },
    { label: "Tasks completed", value: 4000000 },
    { label: "Payments", value: 300000 },
  ], []);

  

  // const handleCountUp = (target) => {
  //   const elements = target.querySelectorAll(".metric-item h2");
  //   elements.forEach((el, index) => {
  //     let start = 0;
  //     const end = metricsData[index].value;
  //     const duration = 2000;
  //     const increment = Math.ceil((end / duration) * 100);

  //     const interval = setInterval(() => {
  //       start += increment;
  //       if (start >= end) {
  //         clearInterval(interval);
  //         start = end;
  //       }
  //       el.textContent = start.toLocaleString();
  //     }, 100);
  //   });
  // };

  const handleCountUp = useCallback((target) => {
    const elements = target.querySelectorAll(".metric-item h2");
    elements.forEach((el, index) => {
      let start = 0;
      const end = metricsData[index].value;
      const duration = 2000;
      const increment = Math.ceil((end / duration) * 100);
  
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          start = end;
        }
        el.textContent = start.toLocaleString();
      }, 100);
    });
  }, [metricsData]); 

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.0 });

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }
  }, [handleCountUp]);

  useEffect(() => {
    if (isInView) {
      handleCountUp(metricsRef.current);
    }
  }, [isInView , handleCountUp]);
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7,logo1, logo2, logo3, logo4, logo5, logo6, logo7];



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

      {/* Scrolling Logos with Seamless Effect */}
      {/* <div className="logo-wrapper">
        <div className="logo-container">
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo7].map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} />
          ))}
          
        </div>


      </div> */}

      {/* <div className="logo-wrapper">
        <div className="logo-container">
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} />
          ))}
        </div>
      </div> */}

      <div className="logo-wrapper">
        <div className="logo-track">
          <div className="logo-container">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`logo-${index}`} />
            ))}
            {logos.map((logo, index) => (
              <img key={index + logos.length} src={logo} alt={`logo-duplicate-${index}`} />
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default MetricsSection;