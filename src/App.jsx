import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Searchbar from './components/Searchbar';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/search" />} />
            <Route path="/search" element={<Searchbar />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App