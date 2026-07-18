import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/Home/HomePage";
import ProjectPage from "./pages/Project/ProjectPage";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import ApproachPage from "./pages/Project/ApproachPage";
import ProjectDetailPage from "./pages/Project/ProjectDetail/ProjectDetailPage";
import OurStudioHome from "./pages/OurStudio/OurStudioHome";
import ContactPage from "./pages/Contactus/ContactPage";
import ScrollToTop from "./pages/Project/ProjectDetail/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
<ScrollToTop />

     <Navbar/>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/Approach" element={<ApproachPage />} />
        <Route path="/projectdetail" element={<ProjectDetailPage />} />
        <Route path = "/our-studio" element = {<OurStudioHome />} />
        <Route path="/contact-us" element = {<ContactPage />}/>
      </Routes>
       <Footer />
       
    </BrowserRouter>
  );
}

export default App;