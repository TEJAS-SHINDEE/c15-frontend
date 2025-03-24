import React, { useState, useEffect } from "react";
import "./InterviewExperiencePage.css";

const InterviewExperiencePage = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/interview-experiences")
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error fetching experiences:", error));
  }, []);

  return (
    <div className="experience-container">
      <h1>Interview Experiences</h1>
      {experiences.length === 0 ? (
        <p>Loading experiences...</p>
      ) : (
        <div className="experience-list">
          {experiences.map((experience) => (
            <div key={experience._id} className="experience-card">
              <h3>{experience.title}</h3>
              <p><strong>Company:</strong> {experience.company}</p>
              <p><strong>Role:</strong> {experience.role}</p>
              <p><strong>Experience :</strong> {experience.experience}</p>
              <p><strong>Tips : </strong> {experience.tips}</p>
              {/* <p><em>Date: {new Date(experience.createdAt).toLocaleDateString()}</em></p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InterviewExperiencePage;
