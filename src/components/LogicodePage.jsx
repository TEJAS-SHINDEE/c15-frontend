import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import '../components/LogicodePage.css'; 
// import ProblemSubmission from "./ProblemSubmission";
// import ProgressTracker from "./ProgressTracker";
// import ProblemDetailPage from "./ProblemDetailPage";
const LogicodePage = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/problems")
      .then((response) => response.json())
      .then((data) => {setProblems(data)
        console.log(data[4]._id);
  })
      .catch((error) => console.error("Error fetching problems:", error));
  }, []);



  return (
    <div>
      <div>
        <h1>Welcome to Logicode</h1>
        <h2>Logicode - Problem List</h2>
      {problems.length === 0 ? (
        <p>Loading problems...</p>
      ) : (
        <ul>
          {problems.map((problem) => (
            <li key={problem._id}>
              <Link to={`/logicode/problems/${problem?._id}`}>
                <h3>{problem.title}</h3>
                <h5>{problem.difficulty}</h5>
              </Link>
              <p>{problem.description.slice(0, 10000)}...</p> {/* Truncate description */}
            </li>
          ))}
        </ul>
      )}
      {/* <h1>Welcome To Logicode</h1> */}
        {/* <ProblemSubmission  /> */}
        {/* <ProgressTracker  /> */}
        {/* <ProblemDetailPage/> */}
      </div>
      
    </div>
  );
};

export default LogicodePage;
