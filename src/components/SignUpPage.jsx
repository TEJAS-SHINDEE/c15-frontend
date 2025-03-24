import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: "", gr : "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://c15-backend-s9le.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      alert(data.message);
      navigate("/home"); // Redirect to Sign In after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        Enter Name : <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        Enter Email : <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        Enter GR No : <input type="text" name="gr" placeholder="GR Number" value={formData.gr} onChange={handleChange} required/>
        Enter Password : <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        Enter Role : <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignUpPage;