// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigator from '../src/App navigator/Navigator'; 
import './App.css';
import AppRoutes from './Routes'; 
// import Footer from './component/footer/footer';
import Footer from './component/Landing/Footer/Footer'
function App() {
  return (
    <Router>
      <div>
        
        <Navigator />

        
        <AppRoutes />
         <Footer/>
      </div>
    </Router>
  );
}

export default App;



// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, useLocation } from 'react-router-dom';
// import Navigator from '../src/App navigator/Navigator';
// import './App.css';
// import AppRoutes from './Routes';
// import Footer from './component/footer/footer';

// function App() {
//   return (
//     <Router>
//       <Navigator />
//       <AppRoutes />
//       <ConditionalFooter />
//     </Router>
//   );
// }

// function ConditionalFooter() {
//   const location = useLocation();
//   const hideFooterRoutes = ['/landing'];
//   if (hideFooterRoutes.includes(location.pathname)) return null;
//   return <Footer />;
// }

// export default App;