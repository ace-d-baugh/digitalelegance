// App.tsx

import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from '../finecode/components/layout'
import { Home, About, Contact, Portfolio, Project, Resume, NotFound } from '../finecode/pages/'
import './App.css'

function App({companyName}: {companyName: string}) {

  return (
    <>
      <div className="App">
        <Header logoText = {companyName} />
        <div className="Routes">
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
        <Footer company = {companyName} />
      </div>
    </>
  )
}

export default App

// More Information from videos:
// https://www.youtube.com/watch?v=WgXU7XAZYmQ
// https://www.youtube.com/watch?v=p5LIqg-oNbs
// https://www.youtube.com/watch?v=bdqSEBSXBPk
// https://www.youtube.com/watch?v=HHTHyz1FBNM

