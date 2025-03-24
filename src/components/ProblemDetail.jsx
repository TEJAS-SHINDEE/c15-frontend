import React, { useState, useEffect } from "react";

const ProblemDetail = ({ match }) => {
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(`/api/problems/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setProblem(data));
  }, [match.params.id]);

  const handleSubmit = () => {
    fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // userId: problem._id, // Replace with actual user ID
        problemId: problem._id,
        code,
      }),
    }).then((res) => res.json())
      .then((data) => alert(data.status));
  };

  return problem ? (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProblemDetail;
