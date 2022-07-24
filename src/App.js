
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contract from './component/pages/Contract';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contract" component={Contract}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
