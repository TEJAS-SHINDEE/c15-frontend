import React, { useState } from "react";
import "./ProfileMenu.css";

const ProfileMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("strhu");

  const toggleProfile = () => {
    console.log("Profile icon clicked!"); // Debugging
    setIsOpen(!isOpen);
  };

  if (!user) return null;

  return (
    <div>
      {/* Circular Icon */}
      <div className="profile-icon" onClick={toggleProfile}>
        {user.name[0].toUpperCase()}
      </div>

      {/* Full Screen Modal */}
      {isOpen && (
        <div className="profile-modal">
          <div className="profile-modal-content">
            <h2>User Information</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {role}</p>
            <button onClick={toggleProfile} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
