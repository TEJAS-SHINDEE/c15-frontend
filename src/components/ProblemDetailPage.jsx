import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProblemDetailPage = () => {
  const { id } = useParams(); 
  console.log('id',id);
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);  // ✅ Set loading to true initially
  // const [_error, setError] = useState(null);
  const [language, setLanguage] = useState("cpp");
  const [solution, setSolution] = useState("");

  useEffect(() => {
    const fetchProblemDetails = async () => {
      setLoading(true);  // ✅ Start loading
      // setError(null);    // ✅ Reset error before fetching new data

      try {
        const response = await fetch(`https://c15-backend-s9le.onrender.com/api/problems`);
        if (!response.ok) {
          throw new Error("Problem not found");
        }
        const data = await response.json();
        const singleProblem = data.find((problem)=>{
          return problem?._id === id;
        });
        console.log('single prob ',singleProblem);
        console.log('single prob ',data);

        setProblem(singleProblem);
      } 
      // catch (err) {
      //   setError(err.message);
      // } 
      finally {
        setLoading(false); // ✅ Stop loading after request
      }
    };

    fetchProblemDetails();
  }, [id]);

  

  if (loading) {
    return <p>Loading problem details...</p>;
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`https://c15-backend-s9le.onrender.com/api/problems/${id}/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                userId: "USER_ID_HERE",  // Replace with actual user ID
                code: solution
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Submission failed:", error);
        alert("Submission failed. Check console for details.");
    }
};

  

  return (
    <div >
      <div>
      <h2>{problem?.title}</h2>
      <p>{problem?.description}</p>
      <p><strong>Solution:</strong> {problem?.solution}</p>
      <p><strong>Difficulty:</strong> {problem?.difficulty}</p>
      <p><strong>Tags:</strong> {problem?.tags?.join(", ")}</p>

      </div>

       {/* Solution Submission Form */}
      <div>
        <h3>Submit your solution</h3>
        <form onSubmit={handleSubmit}>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
          <br /><br />
          <textarea 
            placeholder="Enter your solution here" 
            rows="10" 
            style={{ width: "100%" }}
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProblemDetailPage;
