import React from "react";

const UserInfo = ({ user }) => {
  if (!user) {
    return <p style={{ textAlign: "center", color: "red" }}>No user information available. Please log in.</p>;
  }

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>User Information</h2>
      <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", backgroundColor: "#f9f9f9" }}>
        <p><strong>Name : </strong> {user.name}</p>
        <p><strong>Email : </strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
