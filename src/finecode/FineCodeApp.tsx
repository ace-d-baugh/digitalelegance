// FineCodeApp.tsx

import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header, Footer } from './components/layout'
import { Home, About, Contact, Portfolio, Project, Resume, NotFound } from './pages/'
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'
import './FineCodeApp.css'

// Scrolls window to top on every route change
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function FineCodeApp({companyName}: {companyName: string}) {
  const { pathname } = useLocation();
  const isHomepage = pathname === '/finecode' || pathname === '/finecode/';

  return (
    <>
      <div className="App">
        <ScrollToTopOnNavigate />
        {!isHomepage && <Header logoText={companyName} />}
        <div className={`Routes${isHomepage ? ' home-route' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:projectId" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer company={companyName} />
        <ScrollToTop />
      </div>
    </>
  )
}

export default FineCodeApp
