import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TheBook from "./pages/TheBook";
import TechNews from "./pages/Categories/TechNews";
import JobNews from "./pages/Categories/JobNews";
import IndiaNews from "./pages/Categories/IndiaNews";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorldNews from "./pages/Categories/WorldNews";
import DataNews from "./pages/Categories/DataNews";
import SportsNews from "./pages/Categories/SportsNews";
import HealthNews from "./pages/Categories/HealthNews";
import OpinionNews from "./pages/Categories/OpinionNews";
import ScienceNews from "./pages/Categories/ScienceNews";
import BusinessNews from "./pages/Categories/BusinessNews";
import PremiumPage from "./pages/Categories/Premium";
import TermsOfUse from "./pages/Utilty/TermsOfUse";
import PrivacyPolicy from "./pages/Utilty/PrivacyPolicy";
import UnderConstruction from "./pages/Utilty/UnderConstruction";
import TechTimesAuth from "./pages/TechTimesAuth";
import TheVideos from "./pages/TheVideos";
import AuthSuccess from "./auth/AuthSucess";
import CategoryNews from "./pages/Categories/CategoryNews";

function App() {
  const location = useLocation();

  // Hide header/footer for login page
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/privacypolicy" || location.pathname === "/termsofuse";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weareworkingonthat" element={<UnderConstruction />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/login" element={<TechTimesAuth />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/thebook" element={<TheBook />} />
        <Route path="/thevideos" element={<TheVideos />} />
        <Route path="/technews" element={<TechNews />} />
        <Route path="/jobnews" element={<JobNews />} />
        <Route path="/indianews" element={<IndiaNews />} />
        <Route path="/worldnews" element={<WorldNews />} />
        <Route path="/sportsnews" element={<SportsNews />} />
        <Route path="/datanews" element={<DataNews />} />
        <Route path="/healthnews" element={<HealthNews />} />
        <Route path="/opinionnews" element={<OpinionNews />} />
        <Route path="/sciencenews" element={<ScienceNews />} />
        <Route path="/businessnews" element={<BusinessNews />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/auth/success" element={<AuthSuccess/>}/>
         <Route path="/news/:category" element={<CategoryNews />} />
         <Route path="/business/:category" element={<CategoryNews />} />
         <Route path="/careers/:category" element={<CategoryNews />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
