import React, { useState, useEffect } from "react";

const PreviousQuestions = ({user}) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('user pyqs ',user.name);
  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/previous-questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch previous year questions");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (error) return <p style={styles.error}>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Previous Year Questions</h1>
      {questions.map((question) => (
        <div key={question._id} style={styles.card}>
          <h3 style={styles.companyName}>{question.companyName} - {question.year}</h3>
          <h4 style={styles.questionsTitle}>Questions</h4>
          {question.questions.map((q, index) => (
            <p key={index} style={styles.question}>
              <strong style={styles.questionNumber}>{index + 1}</strong>. {q}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    color: "#333",
    marginBottom: "30px",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  companyName: {
    fontSize: "22px",
    color: "#2c3e50",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  questionsTitle: {
    fontSize: "18px",
    color: "#34495e",
    marginBottom: "15px",
    fontWeight: "500",
  },
  question: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
    paddingLeft: "20px",
  },
  questionNumber: {
    fontSize: "18px",
    color: "#e74c3c",
    marginRight: "10px",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    color: "#2c3e50",
    fontWeight: "bold",
  },
  error: {
    textAlign: "center",
    fontSize: "20px",
    color: "#e74c3c",
    fontWeight: "bold",
  },
};

export default PreviousQuestions;



// import React, { useState, useEffect } from "react";
// import "./PreviousQuestions.css";

// const PreviousQuestions = ({ user }) => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({
//     companyName: "",
//     year: "",
//     questions: [""]
//   });
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     if (user?.name?.toLowerCase().includes("admin")) {
//       setIsAdmin(true);
//     }
//   }, [user]);

//   useEffect(() => {
//     fetch("https://c15-backend-s9le.onrender.com/api/previous-questions")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch previous year questions");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setQuestions(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("https://c15-backend-s9le.onrender.com/api/previous-questions", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newQuestion)
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to post question");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setQuestions([...questions, data]);
//         setShowForm(false);
//         setNewQuestion({ companyName: "", year: "", questions: [""] });
//       })
//       .catch((error) => alert(error.message));
//   };

//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error">Error: {error}</p>;

//   return (
//     <div className="container">
//       <h1 className="heading">Previous Year Questions</h1>

//       {isAdmin && (
//         <button className="add-btn" onClick={() => setShowForm(!showForm)}>
//           {showForm ? "Cancel" : "Add New Question"}
//         </button>
//       )}

//       {showForm && (
//         <form onSubmit={handleSubmit} className="question-form">
//           <input
//             type="text"
//             placeholder="Company Name"
//             value={newQuestion.companyName}
//             onChange={(e) => setNewQuestion({ ...newQuestion, companyName: e.target.value })}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Year"
//             value={newQuestion.year}
//             onChange={(e) => setNewQuestion({ ...newQuestion, year: e.target.value })}
//             required
//           />
//           {newQuestion.questions.map((q, index) => (
//             <input
//               key={index}
//               type="text"
//               placeholder={`Question ${index + 1}`}
//               value={q}
//               onChange={(e) => {
//                 const updatedQuestions = [...newQuestion.questions];
//                 updatedQuestions[index] = e.target.value;
//                 setNewQuestion({ ...newQuestion, questions: updatedQuestions });
//               }}
//               required
//             />
//           ))}
//           <button type="button" onClick={() => setNewQuestion({ ...newQuestion, questions: [...newQuestion.questions, ""] })}>
//             Add Question
//           </button>
//           <button type="submit">Post Question</button>
//         </form>
//       )}

//       {questions.map((question) => (
//         <div key={question._id} className="card">
//           <h3 className="company-name">{question.companyName} - {question.year}</h3>
//           <h4 className="questions-title">Questions</h4>
//           {question.questions.map((q, index) => (
//             <p key={index} className="question">
//               <strong className="question-number">{index + 1}</strong>. {q}
//             </p>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };



// const styles = {
//   container: {
//     padding: "20px",
//     fontFamily: "'Arial', sans-serif",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: "36px",
//     color: "#333",
//     marginBottom: "30px",
//     fontWeight: "600",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     marginBottom: "20px",
//   },
//   companyName: {
//     fontSize: "22px",
//     color: "#2c3e50",
//     marginBottom: "10px",
//     fontWeight: "bold",
//   },
//   questionsTitle: {
//     fontSize: "18px",
//     color: "#34495e",
//     marginBottom: "15px",
//     fontWeight: "500",
//   },
//   question: {
//     fontSize: "16px",
//     color: "#555",
//     marginBottom: "10px",
//     paddingLeft: "20px",
//   },
//   questionNumber: {
//     fontSize: "18px",
//     color: "#e74c3c",
//     marginRight: "10px",
//   },
//   loading: {
//     textAlign: "center",
//     fontSize: "20px",
//     color: "#2c3e50",
//     fontWeight: "bold",
//   },
//   error: {
//     textAlign: "center",
//     fontSize: "20px",
//     color: "#e74c3c",
//     fontWeight: "bold",
//   },
// };


// export default PreviousQuestions;


