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
import SearchModal from "./components/SearchModal";
import NewsDetail from "./pages/NewsDetail";
import AboutUs from "./pages/Utilty/AboutUs";
import ContactUs from "./pages/Utilty/ContactUs";
import AdvertiseWithUs from "./pages/Utilty/AdvertiseWithUs";
import WriteForUs from "./pages/Utilty/WriteForUs";
import Careers from "./pages/Utilty/Careers";
import Press from "./pages/Utilty/Press";
import MediaKit from "./pages/Utilty/MediaKit";
import HelpCenter from "./pages/Utilty/HelpCenter";
import Support from "./pages/Utilty/Support";
import FAQ from "./pages/Utilty/FAQ";
import Feedback from "./pages/Utilty/Feedback";
import ReportIssue from "./pages/Utilty/ReportIssue";
import Disclaimer from "./pages/Utilty/Disclaimer";
import Opinion from "./pages/Utilty/Opinion";
import Editorial from "./pages/Utilty/Editorial";
import Columns from "./pages/Utilty/Columns";
import Analysis from "./pages/Utilty/Analysis";
import GuestPosts from "./pages/Utilty/GuestPosts";
import ReadersCorner from "./pages/Utilty/ReadersCorner";
import Books from "./pages/Utilty/Books";
import EBooks from "./pages/Utilty/EBooks";
import FreeResources from "./pages/Utilty/FreeResources";
import Courses from "./pages/Utilty/Courses";
import Tutorials from "./pages/Utilty/Tutorials";
import Certifications from "./pages/Utilty/Certifications";
import ExamPreparation from "./pages/Utilty/ExamPreparation";
import SkillDevelopment from "./pages/Utilty/SkillDevelopment";
import Events from "./pages/Utilty/Events";
import Webinars from "./pages/Utilty/Webinars";
import Conferences from "./pages/Utilty/Conferences";
import Hackathons from "./pages/Utilty/Hackathons";
import Podcasts from "./pages/Utilty/Podcasts";
import Newsletters from "./pages/Utilty/Newsletters";
import CommunityStories from "./pages/Utilty/CommunityStories";
import Startups from "./pages/Utilty/Startups";
import WebDevelopment from "./pages/Utilty/WebDevelopment";
import MobileApps from "./pages/Utilty/MobileApps";
import Facebook from "./pages/Utilty/Facebook";
import TwitterX from "./pages/Utilty/TwitterX";
import Instagram from "./pages/Utilty/Instagram";
import LinkedIn from "./pages/Utilty/LinkedIn";
import YouTube from "./pages/Utilty/YouTube";
import Telegram from "./pages/Utilty/Telegram";
import WhatsAppChannel from "./pages/Utilty/WhatsAppChannel";
import Videos from "./pages/Utilty/Videos";
import Podcast from "./pages/Utilty/Podcast";
import Crossword from "./pages/Utilty/Crossword";
import Photos from "./pages/Utilty/Photos";
import Newsletter from "./pages/Utilty/Newsletter";
import VisualStory from "./pages/Utilty/VisualStory";
import LitForLife from "./pages/Utilty/LitForLife";
import Specials from "./pages/Utilty/Specials";
import TheHuddle from "./pages/Utilty/TheHuddle";
import TheStory from "./pages/Utilty/TheStory";
import TheTech from "./pages/Utilty/TheTech";
import TheJobs from "./pages/Utilty/TheJobs";
import EPaper from "./pages/Utilty/EPaper";












function App() {
  const location = useLocation();

  // Hide header/footer for login page
  const hideHeaderFooter =
    location.pathname === "/login" || 
    location.pathname === "/privacypolicy" || 
    location.pathname === "/terms-conditions" ||
    location.pathname === "/disclaimer" ||
    location.pathname === "/epaper";



  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weareworkingonthat" element={<UnderConstruction />} />
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
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/advertisewithus" element={<AdvertiseWithUs />} />
        <Route path="/writeforus" element={<WriteForUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/mediakit" element={<MediaKit />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/reportissue" element={<ReportIssue />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/columns" element={<Columns />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/guestposts" element={<GuestPosts />} />
        <Route path="/readerscorner" element={<ReadersCorner />} />
        <Route path="/books" element={<Books />} />
        <Route path="/e-books" element={<EBooks />} />
        <Route path="/freeresources" element={<FreeResources />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/exampreparation" element={<ExamPreparation />} />
        <Route path="/skilldevelopment" element={<SkillDevelopment />} />
        <Route path="/events" element={<Events />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/communitystories" element={<CommunityStories />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/mobileapps" element={<MobileApps />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/twitterx" element={<TwitterX />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/linkedin" element={<LinkedIn />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/telegram" element={<Telegram />} />
        <Route path="/whatsappchannel" element={<WhatsAppChannel />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/crossword" element={<Crossword />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/visualstory" element={<VisualStory />} />
        <Route path="/litforlife" element={<LitForLife />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/thehuddle" element={<TheHuddle />} />
        <Route path="/thestory" element={<TheStory />} />
        <Route path="/thetech" element={<TheTech />} />
        <Route path="/thejobs" element={<TheJobs />} />
        <Route path="/epaper" element={<EPaper />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/login" element={<TechTimesAuth />} />








        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsOfUse />} />
        <Route path="/auth/success" element={<AuthSuccess/>}/>



         <Route path="/news/:category" element={<CategoryNews />} />
         <Route path="/business/:category" element={<CategoryNews />} />
         <Route path="/careers/:category" element={<CategoryNews />} />
         <Route path="/article/:slug" element={<NewsDetail />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
