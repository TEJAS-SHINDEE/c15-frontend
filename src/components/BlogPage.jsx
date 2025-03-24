import React, { useEffect, useState } from 'react';
import './BlogPage.css'; // Import the CSS file for styling

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // States for creating a new blog
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    author: '', // Ideally, this should come from the logged-in user
  });

  // Handle input changes for the new blog form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  // Fetch existing blogs from the backend
  useEffect(() => {
    fetch("https://c15-backend-s9le.onrender.com/api/blogs")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle the creation of a new blog
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!newBlog.title || !newBlog.content || !newBlog.author) {
      setError('Please fill in all fields');
      return;
    }

    fetch("https://c15-backend-s9le.onrender.com/api/blogs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs([data, ...blogs]);  // Add the newly created blog at the top of the list
        setNewBlog({ title: '', content: '', author: '' }); // Reset form
        setError(null);  // Clear error
      })
      .catch((err) => setError('Error creating blog: ' + err.message));
  };

  // Loading and error handling
  if (loading) {
    return <div className="loading">Loading blogs...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="blog-container">
      <h1>Article's</h1>

      {/* New Blog Form */}
      <div>
        <h2>Create a New Article</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={newBlog.title}
              onChange={handleInputChange}
              placeholder="Title"
              required
            />
          </div>
          <div>
            <label>Content: </label>
            <textarea
              name="content"
              value={newBlog.content}
              onChange={handleInputChange}
              placeholder="Content"
              required
            />
          </div>
          <div>
            <label>Author: </label>
            <input
              type="text"
              name="author"
              value={newBlog.author}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
          </div>
          <button type="submit">Submit article</button>
        </form>
      </div>

      {/* Displaying Blogs */}
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="blog-post">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <div className="author-info">
                <strong>Author:</strong> {blog.author}
              </div>
              <div className="createdAt">
                <em>Created at: {new Date(blog.createdAt).toLocaleDateString()}</em>
              </div>
            </div>
          ))
        ) : (
          <p className="no-blogs">No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
