import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Single import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Forgetpassword from "./components/forgetpassword.jsx";
import Signup from "./components/signup.jsx";
import Otpverification from "./components/otpverification.jsx";
import Setpassword from "./components/setpassword.jsx";
import Login from "./components/login.jsx";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

// Google Client ID
const clientId =
  "159024291449-5lm3tvj10dtsj3g1340426kv6gj17gje.apps.googleusercontent.com";

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
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <ToastContainer /> {/* Added to render toasts */}
        <Routes>
          {/* Routes with Header & Footer */}
          <Route element={<DefaultLayout />}>
            <Route path="/Home" element={<Home />} />
            {/* Add more routes here if needed */}
          </Route>

          {/* Routes WITHOUT Header & Footer */}
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/otpverification" element={<Otpverification />} />
          <Route path="/setpassword" element={<Setpassword />} />

        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
