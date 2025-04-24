import React from "react";
import './HomePage.css';  
import { Footer } from "./footer";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <Navbar user={user} onLogout={handleLogout} /> */}
      {/* Header */}
      <header className="header">
        <h1>Welcome to Instacampus: Your College Portal</h1>
        <p>
          Instacampus is your go-to portal for all things related to your college
          experience. Whether it's applying for jobs, exploring coding challenges, or
          accessing interview experiences, we’ve got you covered.
        </p>

        <button>Start Exploring</button>
      </header>

      {/* Features Overview */}
      <section className="features-overview">
        <h2>Explore the Features</h2>
        <p>
          Instacampus provides a wide range of features to help you with your academic
          journey, including job applications, blogs, coding challenges, and much more!
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <i className="uil uil-briefcase"></i>
            <h4>Job Portal</h4>
            <p>
              Browse job opportunities posted by placement cells and alumni. Apply
              for internships and full-time positions.
            </p>
          </div>
          <div className="feature-item">
            <i className="uil uil-book-reader"></i>
            <h4>Study Material</h4>
            <p>
              Access study materials like previous year's question papers, PDFs, and
              other resources shared by seniors.
            </p>
          </div>
          <div className="feature-item">
            <i className="uil uil-pen"></i>
            <h4>Blogs & Articles</h4>
            <p>
              Read blogs and articles to enhance your knowledge, written by fellow
              students and alumni.
            </p>
          </div>
          <div className="feature-item">
            <i className="uil uil-code"></i>
            <h4>Coding Challenges</h4>
            <p>
              Enhance your coding skills with coding challenges that prepare you for
              technical interviews.
            </p>
          </div>
        </div>
      </section>

    {/* {/* Footer */}
      {/* <footer className="footer">
        <p>© 2024 Instacampus. All Rights Reserved.</p>
      </footer> */}

      <Footer />
    </div>
  );
};

export default HomePage;
