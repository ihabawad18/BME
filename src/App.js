import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WhyBME from "./pages/WhyBME";

import Layout from "./components/Layout";
import Layout2 from "./components/Layout2";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout2>
              <Home />
            </Layout2>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/why-BME"
          element={
            <Layout>
              <WhyBME />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
