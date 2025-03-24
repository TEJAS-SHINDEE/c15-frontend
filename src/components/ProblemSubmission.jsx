import React, { useState, useEffect } from "react";

const ProblemSubmission = ({ userId }) => {
  const [problems, setProblems] = useState([]);
  const [code, setCode] = useState("");
  const [selectedProblem, setSelectedProblem] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState({ dailySolved: 0, monthlySolved: 0 });

  // Fetch problems from the backend
  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/problems")
      .then((response) => response.json())
      .then((data) => setProblems(data))
      .catch((error) => console.error("Error fetching problems:", error));

    // Fetch user progress
    fetch(`https://c15-backend-s9le.onrender.com/api/progress/${userId}`)
      .then((response) => response.json())
      .then((data) => setProgress(data))
      .catch((error) => console.error("Error fetching progress:", error));
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedProblem || !code) {
      setMessage("Please select a problem and write your code!");
      return;
    }

    const response = await fetch("https://c15-backend-s9le.onrender.com/api/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        problemId: selectedProblem,
        code,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage(`Solution ${data.status}!`);
    } else {
      setMessage("Error submitting solution.");
    }

    // Fetch updated progress
    fetch(`https://c15-backend-s9le.onrender.com/api/progress/${userId}`)
      .then((response) => response.json())
      .then((data) => setProgress(data))
      .catch((error) => console.error("Error fetching progress:", error));
  };

  return (
    <div>
      <h2>Submit Your Solution</h2>
      
      <div>
        <h3>Progress</h3>
        <p>Daily Solved: {progress.dailySolved}</p>
        <p>Monthly Solved: {progress.monthlySolved}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Select Problem:
          <select
            value={selectedProblem}
            onChange={(e) => setSelectedProblem(e.target.value)}
          >
            <option value="">Select a problem</option>
            {problems.map((problem) => (
              <option key={problem._id} value={problem._id}>
                {problem.title}
              </option>
            ))}
          </select>
        </label>

        <label> <br /><br /><br />
          Your Code: <br />
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="10"
            cols="30"
            placeholder="Write your code here..."
          />
        </label>

        <button type="submit">Submit Solution</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ProblemSubmission;
