import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Go from './components/Go';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/go" element={<Go />} />
      </Routes>
    </Router>
  );
}

export default App;
