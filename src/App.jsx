import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TheBook from './pages/TheBook';
import TechNews from './pages/Categories/TechNews';
import JobNews from './pages/Categories/JobNews';
import IndiaNews from './pages/Categories/IndiaNews';
import Header from './components/Header';
import Footer from './components/Footer';
import WorldNews from './pages/Categories/WorldNews';
import DataNews from './pages/Categories/DataNews';
import SportsNews from './pages/Categories/SportsNews';
import HealthNews from './pages/Categories/HealthNews';
import OpinionNews from './pages/Categories/OpinionNews';
import ScienceNews from './pages/Categories/ScienceNews';
import BusinessNews from './pages/Categories/BusinessNews';
import PremiumPage from './pages/Categories/Premium';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UnderConstruction from './pages/UnderConstruction';
import TechTimesAuth from './pages/TechTimesAuth';

function App() {
  const location = useLocation();
  
  // Hide header/footer for login page
  const hideHeaderFooter = location.pathname === '/login';

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
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
