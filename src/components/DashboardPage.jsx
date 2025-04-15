import React, { useState, useEffect } from "react";
import ProgressTracker from "./ProgressTracker";
const DashboardPage = ({ user }) => {
  const [progress, _setProgress] = useState(null);
  const [usersDetails, setUsersDetails] = useState([]);
  const [singleUser, setSingleUser] = useState({});

  // Fetch user progress from the API
  useEffect(() => {
    if (user) {
      // const fetchProgress = async () => {
      //   const response = await fetch(`https://c15-backend-s9le.onrender.com/api/progress/${user.id}`);
      //   const data = await response.json();
      //   setProgress(data);
      // };
      // fetchProgress();

      const fetchUsersDetails = async () => {
        const response = await fetch(`https://c15-backend-s9le.onrender.com/api/users`);
        const data = await response.json();
        setUsersDetails(data);
      };
      fetchUsersDetails();
    }

    const singleUser = usersDetails?.find((usr) => {
      return usr._id === user.id;
    });

    setSingleUser(singleUser);
  },[singleUser]);

  // if (!user) {
  //   return <p>Please log in to access the dashboard.</p>;
  // }

  console.log("profile user ",user.id);    // all above working
  console.log('users data ',usersDetails);   
  console.log('single users data ',user?.id);



  // console.log(user.gr);
  return (
    <div style={styles.dashboard}>
      <h2>Welcome, {singleUser?.name}</h2>
      <div style={styles.infoBox}>
        <h3>User Information</h3>
        <p><strong>Name :</strong> {singleUser?.name}</p>
        <p><strong>Email :</strong> {singleUser?.email}</p>
        <p><strong>Role :</strong> {singleUser?.role }</p>
        <p><strong>GR No :</strong> {singleUser?.gr }</p>

      </div>
      
      <div style={styles.levelBox}>
        <h3>Next Level Progress</h3>
        <p>🎓 Current Level: Beginner</p>
        <p>📈 Achievements: 10%</p>
        <p>🔥 Complete more tasks to unlock the next level!</p>
      </div>

      {/* Monthly Progress */}
      {progress ? (
        <div style={styles.levelBox}>
          {/* <h3>Monthly Progress</h3> */}
          <ProgressTracker userId={user.id}/>
          <p>📅 Monthly Solved: {progress.monthlySolved} problems</p>
          <p>📈 Monthly Progress: {progress.monthlySolved}%</p>
          <p>🚀 Keep up the good work!</p>
        </div>
      ) : (
        <p>Loading your progress...</p>
      )}
    </div>
  );
};

const styles = {
  dashboard: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  infoBox: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#eef",
    borderRadius: "5px",
  },
  levelBox: {
    padding: "15px",
    backgroundColor: "#ffe",
    borderRadius: "5px",
  },
};

export default DashboardPage;
