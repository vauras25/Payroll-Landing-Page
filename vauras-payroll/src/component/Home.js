import React from "react";
import Dashboard from "./Dashboard";
import MetricsSection from "../component/MetricsSection/MetricsSection";
// import ComplianceSection from "./ComplianceSection";
// import FooterSection from "./FooterSection";
import TimeTrackingSection from "./TimeTrackingSection";
// import Features from "./Features";
import WallofLove from "./WallOfLove/WallOfLove"
import ValueComponent from "./ValueComponent/ValueComponent";
// import CommunitySection from "./CommunitySection/CommunitySection"
import PracticalFeatures from "./PracticalFeatures/PracticalFeatures"
import Reports from "./Reports/Reports"
import Contact from "./Contact/Contact";
import WhyChooseUs from "./whychoose/WhyChooseUs";
function Home() {
    return(

        <div>
        <Dashboard/>
       <MetricsSection/>
       <WallofLove/>
       <PracticalFeatures/>
       <TimeTrackingSection/>
       <ValueComponent/>
       <Reports/>
       {/* <Features/> */}
       {/* <CommunitySection/>
       <ComplianceSection/>
       <FooterSection/> */}
       <WhyChooseUs/>
       <Contact/>
      
        </div>
    );
  }
  
  export default Home;