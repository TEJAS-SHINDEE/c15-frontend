import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import JobsPage from "./JobsPage";
import '../components/JobPage.css'; // Import the external CSS file
import PreviousQuestions from "./PreviousQuestions"; // Import the component

const JobPage = () => {

  const navigate = useNavigate();
  // eslint-disable-next-line
  const [viewQuestions, setViewQuestions] = useState(false);
  // const handleViewQuestions = () => setViewQuestions(true);

  const handleViewExperiences = () => {
    navigate("/interview-experiences"); // Navigate to InterviewExperiencePage
  };

  const handleDrives = () => {
    navigate("/drives"); // Navigate to InterviewExperiencePage
  }; 
  const handlePyqs = () => {
    navigate("/pyqs"); // Navigate to InterviewExperiencePage
  }; 

  // const handleViewDrives = () => {
  //   navigate("/jobs"); // Navigate to the JobsPage route
  // };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Training and Placement Cell</h2>
      <div style={styles.container}>

        {/* Interview Experience */}
        <div style={styles.block}>
          <h3 style={styles.blockHeading}>Interview Experience</h3>
          <p style={styles.blockContent}>
            Explore experiences shared by students to gain insights into real interviews.
          </p>
          <button style={styles.button} onClick={handleViewExperiences}>
            View Experiences
          </button>

        </div>

        {/* Upcoming Drives */}
        <div style={styles.block}>
          <h3 style={styles.blockHeading}>Upcoming Drives</h3>
          <p style={styles.blockContent}>
            Stay updated on the latest recruitment drives happening soon.
          </p>
          <button style={styles.button} onClick={handleDrives}>
            View Drives
          </button>
          {/* <JobsPage /> */}
        </div>

        {/* Previous Year Questions */}
        <div style={styles.block}>
          <h3 style={styles.blockHeading}>Previous Year Questions</h3>
          <p style={styles.blockContent}>
            Access past recruitment questions to prepare effectively.
          </p>
          <button style={styles.button} onClick={handlePyqs}>View Previous Year Questions</button>
          {viewQuestions && <PreviousQuestions />}
        </div>

        {/* Company-Wise Placed Students */}
        <div style={styles.block}>
          <h3 style={styles.blockHeading}>Company-Wise Placed Students</h3>
          <p style={styles.blockContent}>
            See the list of students placed in various companies.
          </p>
          <button style={styles.button}>View List</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "20px",
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "10px",
  },
  block: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  blockHeading: {
    marginBottom: "10px",
    color: "#00796b",
    fontSize: "18px",
    fontWeight: "bold",
  },
  blockContent: {
    marginBottom: "15px",
    color: "#555",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#00796b",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default JobPage;
