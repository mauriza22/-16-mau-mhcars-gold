/** @format */

// import Layout from "./layout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import FindCar from './pages/find.car';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-car" element={<FindCar />} />
      </Routes>
    </Router>
  );
};

export default App;
