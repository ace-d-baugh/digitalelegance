import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import FineCode from './pages/FineCode';
import FineArt from './pages/FineArt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/finecode/*" element={<FineCode />} />
        <Route path="/fineart" element={<FineArt />} />
      </Routes>
    </Router>
  );
}

export default App;