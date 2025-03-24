// ProblemsPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogicodePage from './LogicodePage';
import ProblemDetailPage from "./ProblemDetailPage";
const ProblemsPage = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/problems")
      .then((response) => response.json())
      .then((data) => {
        setProblems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <LogicodePage/>
      <ProblemDetailPage/>
      <h2>Problems List</h2>
      {problems.map((problem) => (
        <div key={problem._id} className="problem-card">
          <h3>{problem.title}</h3>
          <p>{problem.description}</p>
          <Link to={`/problems/${problem._id}`}>View Problem</Link>
        </div>
      ))}
    </div>
  );
};

export default ProblemsPage;
