import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import MetricsSection from "./MetricsSection/MetricsSection";
import SectionIntro from "./SectionIntro/SectionIntro";
import Features from "./Features/Features";
import InfoSections from "./InfoSections/InfoSections";
import FAQ from "./FAQ/FAQ";
import Testimonials from "./Testimonials/Testimonials";
// import Footer from "./Footer/Footer";
function Landing() {
    return(

        <div>
            <Dashboard />
            <MetricsSection />
            <SectionIntro />
            <Features />
            <InfoSections />
            <FAQ />
            <Testimonials />
            {/* <Footer /> */}
        </div>
    );
  }
  
  export default Landing;