
// // JobsPage.jsx
// import React, { useEffect, useState } from "react";
// import './JobsPage.css';

// const JobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://c15-backend-s9le.onrender.com/api/jobs")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch jobs data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setJobs(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading jobs...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="job-page">
//       <h1>Upcoming Drives</h1>
//       {jobs.length === 0 ? (
//         <p>No Drives available.</p>
//       ) : (
//         <div className="job-listings">
//           {jobs.map((job) => (
//             <div key={job._id} className="job-card">
//               <h2>{job.title}</h2>
//               <p className="company">{job.company}</p>
//               <p className="location">{job.location}</p>
//               <p>{job.description}</p>
//               <p className="date-posted">
//                 Date Posted: {new Date(job.datePosted).toLocaleDateString()}
//               </p>
//               <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
//                 Apply here
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobsPage;

// import React, { useEffect, useState } from "react";
// import "./JobsPage.css";

// const JobsPage = ({user}) => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [newJob, setNewJob] = useState({
//     title: "",
//     company: "",
//     location: "",
//     description: "",
//     applyLink: "",
//   });
//   const [showForm, setShowForm] = useState(true);
//   console.log('user jobs ',user.name);
//   // Fetch jobs data
//   useEffect(() => {
//     fetch("https://c15-backend-s9le.onrender.com/api/jobs")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch jobs data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setJobs(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   // Fetch user data to check admin status
//   useEffect(() => {
//     fetch("https://c15-backend-s9le.onrender.com/api/users", { credentials: "include" })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.role === "admin") {
//           setIsAdmin(true);
//         }
//       })
//       .catch((err) => console.error("Error fetching user data:", err));
//   }, []);

//   // Handle new job submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("https://c15-backend-s9le.onrender.com/api/jobs", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newJob),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to post job");
//         }
//         return response.json();
//       })
//       .then((job) => {
//         setJobs([...jobs, job]);
//         setShowForm(false);
//         setNewJob({
//           title: "",
//           company: "",
//           location: "",
//           description: "",
//           applyLink: "",
//         });
//       })
//       .catch((error) => alert(error.message));
//   };

//   if (loading) {
//     return <div className="loading">Loading jobs...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="job-page">
//       <h1>Upcoming Drives</h1>

//       {isAdmin && (
//         <button onClick={() => setShowForm(!showForm)} className="add-job-btn">
//           {showForm ? "Cancel" : "Add New Job"}
//         </button>
//       )}

//       {showForm && (
//         <form onSubmit={handleSubmit} className="job-form">
//           <input
//             type="text"
//             placeholder="Job Title"
//             value={newJob.title}
//             onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Company"
//             value={newJob.company}
//             onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Location"
//             value={newJob.location}
//             onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
//             required
//           />
//           <textarea
//             placeholder="Description"
//             value={newJob.description}
//             onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
//             required
//           />
//           <input
//             type="url"
//             placeholder="Apply Link"
//             value={newJob.applyLink}
//             onChange={(e) => setNewJob({ ...newJob, applyLink: e.target.value })}
//             required
//           />
//           <button type="submit">Post Job</button>
//         </form>
//       )}

//       {jobs.length === 0 ? (
//         <p>No Drives available.</p>
//       ) : (
//         <div className="job-listings">
//           {jobs.map((job) => (
//             <div key={job._id} className="job-card">
//               <h2>{job.title}</h2>
//               <p className="company">{job.company}</p>
//               <p className="location">{job.location}</p>
//               <p>{job.description}</p>
//               <p className="date-posted">
//                 Date Posted: {new Date(job.datePosted).toLocaleDateString()}
//               </p>
//               <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
//                 Apply here
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobsPage;



import React, { useEffect, useState } from "react";
import "./JobsPage.css";

const JobsPage = ({ user }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    applyLink: "",
  });
  const [showForm, setShowForm] = useState(false);

  // Check if user name contains "admin"
  useEffect(() => {
    if (user?.name?.toLowerCase().includes("admin")) {
      setIsAdmin(true);
    }
  }, [user]);

  // Fetch jobs data
  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs data");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Handle new job submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://c15-backend-s9le.onrender.com/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post job");
        }
        return response.json();
      })
      .then((job) => {
        setJobs([...jobs, job]);
        setShowForm(false);
        setNewJob({
          title: "",
          company: "",
          location: "",
          description: "",
          applyLink: "",
        });
      })
      .catch((error) => alert(error.message));
  };

  if (loading) {
    return <div className="loading">Loading jobs...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="job-page">
      <h1>Upcoming Drives</h1>

      {isAdmin && (
        <button style={{    "backgroundColor": "#004D40", "color":"white"     }} onClick={() => setShowForm(!showForm)} className="add-job-btn">
          {showForm ? "Cancel" : "Add New Job"}
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="job-form">
          <input
            type="text"
            placeholder="Job Title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Company"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={newJob.description}
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            required
          />
          <input
            type="url"
            placeholder="Apply Link"
            value={newJob.applyLink}
            onChange={(e) => setNewJob({ ...newJob, applyLink: e.target.value })}
            required
          />
          <button type="submit">Post Job</button>
        </form>
      )}

      {jobs.length === 0 ? (
        <p>No Drives available.</p>
      ) : (
        <div className="job-listings">
          {jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h2>{job.title}</h2>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <p>{job.description}</p>
              <p className="date-posted">
                Date Posted: {new Date(job.datePosted).toLocaleDateString()}
              </p>
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                Apply here
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsPage;
