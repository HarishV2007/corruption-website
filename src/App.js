import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigationbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ScrollToTop from './utils/ScrollToTop';
import AboutUs from './pages/AboutUs';
import Report from './pages/Report';

function App() {
  return (
    <Router>
      <Navigationbar />
      <ScrollToTop />
      <Route path="/" component={Home} exact />
      <Route path="/report" component={Report} exact />
      <Route path="/about" component={AboutUs} exact />
      <Footer />
    </Router>
  );
}

export default App;
