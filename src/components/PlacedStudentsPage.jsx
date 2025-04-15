import React, { useEffect, useState } from 'react';
import './PlacedStudentsPage.css'; // Optional: style file

const PlacedStudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch placed students
  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/jobs/placed-students")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch placed students");
        return res.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading placed students...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="placed-students-container">
      <h1>Placed Students</h1>

      {students.length > 0 ? (
        students.map((student) => (
          <div key={student._id} className="student-card">
            <h2>{student.name}</h2>
            <p><strong>Company : </strong> {student.company}</p>
            <p><strong>Package : </strong> {student.package} LPA</p>
            <p><strong>Branch : </strong> {student.branch}</p>
            <p><strong>Role : </strong> {student.position}</p>
            <p><strong>Placed On : </strong> {new Date(student.placement_date).toLocaleDateString()}</p>
            {/* <p><strong>Placed On :</strong> {}</p> */}
            <p><strong>Insights : </strong> {student.feedback} </p>
            <pre style={{fontSize:"12px"}}>Mo. No. : {student.contact}      Email : {student.email} </pre>
          </div>
        ))
      ) : (
        <p>No students placed yet.</p>
      )}
    </div>
  );
};

export default PlacedStudentsPage;
