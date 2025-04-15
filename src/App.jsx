import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, _Navigate, _useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import BlogPage from "./components/BlogPage.jsx";
import FAQ from "./components/FAQ";
import About from "./components/About";
import _AuthPage from "./components/AuthPage.jsx"; 
import DashboardPage from "./components/DashboardPage.jsx"; 
import ProblemDetail from "./components/ProblemDetail.jsx";
import ProblemsPage from "./components/ProblemsPage.jsx";
import LogicodePage from "./components/LogicodePage"; 
import _Notification from "./components/Notification";
import JobsPage from "./components/JobsPage.jsx"; 
import JobPage from "./components/JobPage.jsx";
import ProblemDetailPage from "./components/ProblemDetailPage";
import InterviewExperiencePage from "./components/InterviewExperiencePage.jsx";
import Pyqs from './components/PreviousQuestions.jsx';
import SignInPage from "./components/SignInPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import PlacedStudentsPage from "./components/PlacedStudentsPage.jsx";

const App = () => {

  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    role: "",
    gr:"",
    password:"" 
  });

  const notifications = [
    "Welcome to Instacampus!",
    "You have a new task assigned.",
    "Complete your profile for better recommendations.",
    "New problem added to Logicode",
    "Your solution has been reviewed",
    "Reminder: Submit daily challenge!",
  ];
  
  // Check for user in localStorage on app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleAuth = (loggedInUser) => {
    const updatedUser = {
      id: loggedInUser.id,
      name: loggedInUser.name,
      email: loggedInUser.email,
      role: loggedInUser.role,
      gr: loggedInUser.gr,
      password: loggedInUser.password
    };
    console.log("logged in user ",updatedUser);
    setUser(updatedUser); // Set user after authentication
    localStorage.setItem("user", JSON.stringify(updatedUser)); // Store user in localStorage
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem("user"); // Remove from localStorage
  };

  return (
    <Router>
      <div>
        {/* Show Navbar only if user is authenticated */}
        {/* {user && 
          <Navbar user={user} onLogout={handleLogout} />
        } */}
          <Navbar user={user} onLogout={handleLogout} />
        <div style={{ padding: "20px" }}>
           
           {/* {user ? (
            <Notification messages={notifications} />
           ) : (
            <div> </div>
           )} */}

          <Routes>
            {/* Public Route: Auth Page */}
            {/* <Route path="/" element={user ? <Navigate to="/" /> : <AuthPage onAuth={handleAuth} />}/> */}
            
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage onLogin={handleAuth}/>} />
            <Route path="/signup" element={<SignUpPage onLogin={handleAuth}/>} />
           
            {/* Protected Routes */}
            {/* {user ? (
              <> */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/jobs" element={<JobPage />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<DashboardPage user={user} />} />
                <Route path="/problems" element={<ProblemsPage />} />
                <Route path="/problems/:id" element={<ProblemDetail />} />
                <Route path="/logicode" element={<LogicodePage />} />
                <Route path="/logicode/problems/:id" element={<ProblemDetailPage />} />
                <Route path="/problems/:id" element={<ProblemDetailPage />} />
                <Route path="/interview-experiences" element={<InterviewExperiencePage />} />
                <Route path="/drives" element={<JobsPage user={user}/>} />
                <Route path="/pyqs" element={<Pyqs user={user}/>} />
                <Route path="/jobs/placed-students" element={<PlacedStudentsPage />} />
              {/* </>
            ) : ( */}
              // Redirect to Auth Page if not logged in
              {/* <Route path="/home" element={<Navigate to="/" />} /> */}
            {/* )} */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;