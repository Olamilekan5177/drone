import React from "react";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Forgetpassword from "./components/forgetpassword.jsx";
import Signup from "./components/signup.jsx";
import Otpverification from "./components/otpverification.jsx";
import Setpassword from "./components/setpassword.jsx";
import Login from "./components/login.jsx";
import Passwordupdated from "./components/passwordupdated.jsx";
import "font-awesome/css/font-awesome.min.css";

// Layout for pages with header and footer
const DefaultLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Header & Footer */}
        <Route element={<DefaultLayout />}>
          <Route path="/Home" element={<Home />} />
          {/* Add more routes here if needed */}
        </Route>

        {/* Routes WITHOUT Header & Footer */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/otpverification" element={<Otpverification />} />
        <Route path="/setpassword" element={<Setpassword />} />
        <Route path="/passwordupdated" element={<Passwordupdated />} />
      </Routes>
    </Router>
  );
};

export default App;
