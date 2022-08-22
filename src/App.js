import "./App.css";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer/Footer";
import OverView from "./Pages/OverView";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact>
            <Home />
          </Route>
          <Route component={About} path="/about">
            <About />
          </Route>
          <Route component={Contact} path="/contact">
            <Contact />
          </Route>
          <Route component={OverView} path="/overview">
            <OverView />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
