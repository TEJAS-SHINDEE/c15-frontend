// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Notification from "./Notification.jsx";

// const Navbar = ({ user, onLogout }) => {
//   console.log("User data:", user);
//   const navigate = useNavigate();

//   const handleProfileClick = () => {
//     if (user) {
//       navigate("/dashboard");
//     } else {
//       alert("Please log in to view your profile.");
//     }
//   };

//   return (
//     <nav style={styles.nav}>
//       <div style={styles.logoSection}>
//         <a >
//           <img
//             src="/instacampus.jpeg"
//             alt="Instacampus Logo"
//             style={{ width: "120px", height: "auto" }}
//           />
//         </a>
//         <h1 style={styles.title}>InstaCampus</h1>
//       </div>
//       <div>
        
//       <ul style={styles.navList}>
//         <li>
//           <Link to="/home" style={styles.link}>Home</Link>
//         </li>
//         <li>
//           <Link to="/jobs" style={styles.link}>Training & Placement Cell</Link>
//         </li>
//         <li>
//           <Link to="/blogs" style={styles.link}>Articles & Tutorials</Link>
//         </li>
//         <li>
//           <Link to="/about" style={styles.link}>Project Overview</Link>
//         </li>
//         <li>
//           <Link to="/faq" style={styles.link}>FAQ</Link>
//         </li>
//         <li>
//             <Link to="/logicode" style={styles.link}>Logicode</Link>
//         </li>
//         <li>
//           {/* Other Navbar Links */}
//           {user && <Notification userId={user._id} />}
//         </li>
        
//         <li>
//           {/* Conditional Rendering for Login/SignUp and Logout */}
//         {user ? (
//           <li>
//             <Link to="/" onClick={onLogout} style={styles.logoutButton}>
//               Logout
//             </Link>
//           </li>
//         ) : (
//           <li>
//             <Link to="/auth" style={styles.link}>
//               Login / SignUp
//             </Link>
//           </li> 
//         )}
//         </li>
//          {/* Profile Icon */}
//          <li onClick={handleProfileClick} style={{ cursor: "pointer" }}>
//           <img
//             src="./user-icon.png"
//             alt="Profile Icon"
//             style={styles.profileIcon}
//           />
//         </li>
//       </ul>
//       </div>
//     </nav>
    
//   );
// };

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     backgroundColor: "#282c34",
//     color: "#fff",
//     outerWidth : "20px"
//   },
//   logoSection: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   navList: {
    
//     display: "flex",
//     listStyleType: "none",
//     margin: "20px",
//     padding: "20px",
//     alignItems: "center",
//     gap: "15px",
//   },
//   link: {
//     color: "#fff",
//     textDecoration: "none",
//     fontSize: "1rem",
//     padding: "5px 10px",
//     borderRadius: "5px",
//     transition: "background-color 0.2s ease-in-out",
//   },
//   linkHover: {
//     backgroundColor: "#444",
//   },
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     backgroundColor: "#282c34",
//     color: "#fff",
//   },
//   title: { 
//     margin: "10px",
//     color : "#fff" ,
//   },

//   navList: { 
//     display: "flex", listStyleType: "none", margin: "0", padding: "0" 
//   },

//   link: { 
//     color: "#fff", textDecoration: "none", margin: "0 10px" 
//   },

//   profileIcon: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     border: "2px solid #fff",
//     margin:"4px",
//   },
//   logoutButton: {
//     background: "transparent",
//     color: "#fff",
//     border: "1px solid #fff",
//     borderRadius: "5px",
//     padding: "5px 10px",
//     cursor: "pointer",
//   },
// };

// export default Navbar;







import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification.jsx";

const Navbar = ({ user, onLogout }) => {
  console.log("User data:", user);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      alert("Please log in to view your profile.");
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logoSection}>
       {/* eslint-disable-next-line */}
        <a href="#">
          <img
            src="/instacampus.jpeg"
            alt="Instacampus Logo"
            style={{ width: "120px", height: "auto" }}
          />
        </a>
        <h1 style={styles.title}>InstaCampus</h1>
      </div>
      <div>
        <ul style={styles.navList}>
          <li>
            <Link to="/home" style={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="/jobs" style={styles.link}>Training & Placement Cell</Link>
          </li>
          <li>
            <Link to="/blogs" style={styles.link}>Articles & Tutorials</Link>
          </li>
          <li>
            <Link to="/about" style={styles.link}>Project Overview</Link>
          </li>
          <li>
            <Link to="/faq" style={styles.link}>FAQ</Link>
          </li>
          <li>
            <Link to="/logicode" style={styles.link}>Logicode</Link>
          </li>
          <li>{user && <Notification userId={user._id} />}</li>
          <li>
            {user ? (
              <Link to="/" onClick={onLogout} style={styles.logoutButton}>
                Logout
              </Link>
            ) : (
              <Link to="/auth" style={styles.link}>Login / SignUp</Link>
            )}
          </li>
          <li 
            style={styles.profileContainer} 
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <img
              src="./user-icon.png"
              alt="Profile Icon"
              style={styles.profileIcon}
            />
            {showDropdown && user && (
              <div style={styles.dropdownMenu}>
                <button onClick={handleProfileClick} style={styles.dropdownItem}>Go to Dashboard</button>
                <button onClick={onLogout} style={styles.dropdownItem}>Logout</button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "#fff",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: "0",
    padding: "0",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.2s ease-in-out",
  },
  title: {
    margin: "10px",
    color: "#fff",
  },
  profileContainer: {
    position: "relative",
    cursor: "pointer",
  },
  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid #fff",
    margin: "4px",
  },
  dropdownMenu: {
    position: "absolute",
    top: "50px",
    right: "0",
    background: "#333",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  dropdownItem: {
    background: "none",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    textAlign: "left",
    cursor: "pointer",
    width: "100%",
  },
  logoutButton: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;

