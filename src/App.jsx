import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import './App.css'

function App() {
  

  return (
    <div>
     <Router>
     <Routes>
     <Route path="/" element={<Landing/>} />
     </Routes>
     </Router>

    </div>
  )
}

export default App
