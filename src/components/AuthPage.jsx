import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

const AuthPage = ({ onAuth }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In/Sign Up
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSignIn = () => navigate("/signin");
  // const handleSignUp = () => navigate("/signup");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignUp
      ? "https://c15-backend-s9le.onrender.com/api/auth/register" // Sign Up
      : "https://c15-backend-s9le.onrender.com/api/auth/login";  // Sign In

    console.log("Form Data Sent:", formData); // Debugging

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(isSignUp ? "Sign Up failed" : "Sign In failed");
      }

      const data = await response.json();
      onAuth(data.user); // Set user state after successful response
      navigate("/home");
    } catch (err) {
      setError(err.message); // Show error message
    }
  };


  return (
    <div className="auth-container">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
      {isSignUp ? 
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        /> : 
        <></>

        }

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button">
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>

    
  );
};

export default AuthPage;