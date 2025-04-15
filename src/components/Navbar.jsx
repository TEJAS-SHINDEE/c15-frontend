// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import Notification from "./Notification.jsx";

// // const Navbar = ({ user, onLogout }) => {
// //   console.log("User data:", user);
// //   const navigate = useNavigate();

// //   const handleProfileClick = () => {
// //     if (user) {
// //       navigate("/dashboard");
// //     } else {
// //       alert("Please log in to view your profile.");
// //     }
// //   };

// //   return (
// //     <nav style={styles.nav}>
// //       <div style={styles.logoSection}>
// //         <a >
// //           <img
// //             src="/instacampus.jpeg"
// //             alt="Instacampus Logo"
// //             style={{ width: "120px", height: "auto" }}
// //           />
// //         </a>
// //         <h1 style={styles.title}>InstaCampus</h1>
// //       </div>
// //       <div>
        
// //       <ul style={styles.navList}>
// //         <li>
// //           <Link to="/home" style={styles.link} className="">Home</Link>
// //         </li>
// //         <li>
// //           <Link to="/jobs" style={styles.link}>Training & Placement Cell</Link>
// //         </li>
// //         <li>
// //           <Link to="/blogs" style={styles.link}>Articles & Tutorials</Link>
// //         </li>
// //         <li>
// //           <Link to="/about" style={styles.link}>Project Overview</Link>
// //         </li>
// //         <li>
// //           <Link to="/faq" style={styles.link}>FAQ</Link>
// //         </li>
// //         <li>
// //             <Link to="/logicode" style={styles.link}>Logicode</Link>
// //         </li>
// //         <li>
// //           {/* Other Navbar Links */}
// //           {user && <Notification userId={user._id} />}
// //         </li>
        
// //         <li>
// //           {/* Conditional Rendering for Login/SignUp and Logout */}
// //         {user ? (
// //           <li>
// //             <Link to="/#" onClick={onLogout} style={styles.logoutButton}>
// //               Logout
// //             </Link>
// //           </li>
// //         ) : (
// //           <li className="">
// //             <Link to="/signin" style={styles.link}>
// //               Login / SignUp
// //             </Link>
// //           </li> 
// //         )}
// //         </li>
// //          {/* Profile Icon */}
// //          <li onClick={handleProfileClick} style={{ cursor: "pointer" }}>
// //           <img
// //             src="./user-icon.png"
// //             alt="Profile Icon"
// //             style={styles.profileIcon}
// //           />
// //         </li>
// //       </ul>
// //       </div>
// //     </nav>
    
// //   );
// // };

// // const styles = {
// //   nav: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: "10px 20px",
// //     backgroundColor: "#282c34",
// //     color: "#fff",
// //     outerWidth : "20px"
// //   },
// //   logoSection: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "10px",
// //   },

// //   navList: {
    
// //     display: "flex",
// //     listStyleType: "none",
// //     margin: "20px",
// //     padding: "20px",
// //     alignItems: "center",
// //     gap: "15px",
// //   },
// //   link: {
// //     color: "#fff",
// //     textDecoration: "none",
// //     fontSize: "1rem",
// //     padding: "5px 10px",
// //     borderRadius: "5px",
// //     transition: "background-color 0.2s ease-in-out",
// //   },
// //   linkHover: {
// //     backgroundColor: "#444",
// //   },
// //   nav: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: "10px 20px",
// //     backgroundColor: "#282c34",
// //     color: "#fff",
// //   },
// //   title: { 
// //     margin: "10px",
// //     color : "#fff" ,
// //   },

// //   navList: { 
// //     display: "flex", listStyleType: "none", margin: "0", padding: "0" 
// //   },

// //   link: { 
// //     color: "#fff", textDecoration: "none", margin: "0 10px" 
// //   },

// //   profileIcon: {
// //     width: "40px",
// //     height: "40px",
// //     borderRadius: "50%",
// //     border: "2px solid #fff",
// //     margin:"4px",
// //   },
// //   logoutButton: {
// //     background: "transparent",
// //     color: "#fff",
// //     border: "1px solid #fff",
// //     borderRadius: "5px",
// //     padding: "5px 10px",
// //     cursor: "pointer",
// //   },
// // };

// // export default Navbar;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Notification from "./Notification.jsx";

// const Navbar = ({ user, onLogout }) => {
//   console.log("User data:", user);
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(true); // Toggle for mobile menu

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
//         <a>
//           <img src="/instacampus.jpeg" alt="Instacampus Logo" style={styles.logo} />
//         </a>
//         <h1 style={styles.title}>InstaCampus</h1>
//       </div>

//       {/* Hamburger Menu for Mobile */}
//       <div style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
//         ☰
//       </div>

//       {/* Navigation Links */}
//       <ul style={{ ...styles.navList, display: isOpen ? "flex" : "none" }}>
//         <li><Link to="/home" style={styles.link}>Home</Link></li>
//         <li><Link to="/jobs" style={styles.link}>Training & Placement</Link></li>
//         <li><Link to="/blogs" style={styles.link}>Articles & Tutorials</Link></li>
//         <li><Link to="/about" style={styles.link}>Project Overview</Link></li>
//         <li><Link to="/faq" style={styles.link}>FAQ</Link></li>
//         <li><Link to="/logicode" style={styles.link}>Logicode</Link></li>
//         <li>{user && <Notification userId={user._id} />}</li>

//         {/* Login / Logout */}
//         <li>
//           {user ? (
//             <Link to="/#" onClick={onLogout} style={styles.logoutButton}>Logout</Link>
//           ) : (
//             <Link to="/signin" style={styles.link}>Login / SignUp</Link>
//           )}
//         </li>

//         {/* Profile Icon */}
//         <li onClick={handleProfileClick} style={{ cursor: "pointer" }}>
//           <img src="./user-icon.png" alt="Profile Icon" style={styles.profileIcon} />
//         </li>
//       </ul>
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
//     position: "sticky",
//     top: "0",
//     width: "100%",
//     zIndex: "1000",
//   },
//   logoSection: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   logo: {
//     width: "120px",
//     height: "auto",
//   },
//   title: {
//     color: "#fff",
//   },
//   hamburger: {
//     display: "none",
//     fontSize: "24px",
//     cursor: "pointer",
//     color: "#fff",
//   },
//   navList: {
//     display: "flex",
//     listStyleType: "none",
//     margin: "0",
//     padding: "0",
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
//   profileIcon: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     border: "2px solid #fff",
//     margin: "4px",
//   },
//   logoutButton: {
//     background: "transparent",
//     color: "#fff",
//     border: "1px solid #fff",
//     borderRadius: "5px",
//     padding: "5px 10px",
//     cursor: "pointer",
//   },

//   /* Responsive Styles */
//   "@media (max-width: 768px)": {
//     navList: {
//       flexDirection: "column",
//       position: "absolute",
//       top: "60px",
//       right: "0",
//       backgroundColor: "#282c34",
//       width: "100%",
//       textAlign: "center",
//       padding: "10px 0",
//     },
//     hamburger: {
//       display: "block",
//     },
//   },
// };

// export default Navbar;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification.jsx";
import "./Navbar.css"; // Importing external CSS

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      alert("Please log in to view your profile.");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/instacampus.jpeg" alt="Logo" className="logo" />
        <h1 className="title">InstaCampus</h1>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/jobs">Training & Placement</Link></li>
        <li><Link to="/blogs">Articles & Tutorials</Link></li>
        <li><Link to="/about">Project Overview</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/logicode">Logicode</Link></li>
        <li>{user && <Notification userId={user._id} />}</li>
        <li>
          {user ? (
            <Link to="/#" onClick={onLogout} className="logout-btn">Logout</Link>
          ) : (
            <Link to="/signin">Login / SignUp</Link>
          )}
        </li>
        <li onClick={handleProfileClick} className="profile-icon-wrapper">
          <img src="./user-icon.png" alt="Profile" className="profile-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
