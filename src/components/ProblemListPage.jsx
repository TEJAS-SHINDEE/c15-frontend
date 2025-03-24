import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProblemListPage = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/problems")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch problems");
        }
        return response.json();
      })
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
    return <p>Loading problems...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Problem List</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem._id}>
            <h3>{problem.title}</h3>
            <button onClick={() => navigate(`/problems/${problem._id}`)}>
              View Problem
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemListPage;
