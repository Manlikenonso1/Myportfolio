import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import PageTransition from './components/ui/PageTransition';
import CustomCursor from './components/ui/CustomCursor';
import ScrollToTopBtn from './components/ui/ScrollToTopBtn';

// Code-splitting routes for optimal performance and near-instant initial load
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteLoader() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-[var(--bg)]">
      <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<RouteLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"            element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about"       element={<PageTransition><About /></PageTransition>} />
          <Route path="/services"    element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/:id" element={<PageTransition><ServiceDetails /></PageTransition>} />
          <Route path="/projects"    element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/projects/:id" element={<PageTransition><ProjectDetails /></PageTransition>} />
          <Route path="/contact"     element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/help-center" element={<PageTransition><HelpCenter /></PageTransition>} />
          <Route path="*"            element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <ScrollToTopBtn />
      <Footer />
    </Router>
  );
}

export default App;

