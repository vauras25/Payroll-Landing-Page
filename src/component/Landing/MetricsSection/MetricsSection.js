import React, { useState, useEffect, useRef, useCallback ,useMemo} from "react";
import "../MetricsSection/MetricsSection.css";

import companyLogos from './loadLogos';
const MetricsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const metricsRef = useRef(null);




  const metricsData = useMemo(() => [
    { label: "LEGACY", value: 20 , suffix:"+ Years" },
    { label: "EMPLOYEES MANAGED", value: 30000 , suffix:"+" },
    { label: "CLIENTS SERVED", value: 350 ,suffix:"+" },
    { label: " TEAM STRENGTH", value: 40 , suffix:"+" },
    { label: " CTC HANDLED", value:  275 , suffix:"CR+" }, 
  ], []);


  const handleCountUp = useCallback((target) => {
    const elements = target.querySelectorAll('.metric-section-item h2');
    elements.forEach((el, index) => {
      let start = 0;
      const end = metricsData[index].value;
      const suffix = metricsData[index].suffix || "";
      const duration = 2000; 
      const increment = Math.ceil(end / (duration / 100)); 
  
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          el.textContent = `${end.toLocaleString()}${suffix}`; 
        } else {
          el.textContent = `${start.toLocaleString()}${suffix}`; 
        }
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
  // const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7,logo1, logo2, logo3, logo4, logo5, logo6, logo7];



  return (
    <div className="metrics-container" ref={metricsRef}>
      <div className="logo-wrapper">
        <div className="logo-track">
          <div className="logo-container">
            {companyLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`logo-${index}`} />
            ))}
            {companyLogos.map((logo, index) => (
              <img key={index + companyLogos.length} src={logo} alt={`logo-duplicate-${index}`} />
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default MetricsSection;