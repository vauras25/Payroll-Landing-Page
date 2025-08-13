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
import Practical_Features from "./Practical_Features/Practical_Features"
import Reports from "./Reports/Reports"
import Contact from "./Contact/Contact";
function Home() {
    return(

        <div>
        <Dashboard/>
       <MetricsSection/>
       <WallofLove/>
       <Practical_Features/>
       <TimeTrackingSection/>
       <ValueComponent/>
       <Reports/>
       {/* <Features/> */}
       {/* <CommunitySection/>
       <ComplianceSection/>
       <FooterSection/> */}
       <Contact/>
        </div>
    );
  }
  
  export default Home;