import React, { useEffect, useState } from "react";

const Notification = ({ userId }) => {
  // Hardcoded notifications array
  const initialNotifications = [
    "Welcome to Instacampus!",
    "You have a new task assigned.",
    "Complete your profile for better recommendations.",
    "New problem added to Logicode",
    "Your solution has been reviewed",
    "Reminder: Submit daily challenge!",
    "Your profile has been updated.",
    "Don't forget to check your messages.",
    "New features have been added to the platform.",
    "Your subscription will expire soon.",
    "You have a new friend request.",
    "Your settings have been saved.",
    "New updates are available.",
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch notifications from the backend (optional)
  useEffect(() => {
    // eslint-disable-next-line
    const _fetchNotifications = async () => {
      try {
        const response = await fetch(`https://c15-backend-s9le.onrender.com/api/notifications/${userId}`);
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    // Uncomment the following line if you want to fetch notifications from the backend
    // fetchNotifications();
  }, [userId]);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  const markAsRead = (index) => {
    // Mark the notification as read (for now, we can just append "(read)" to the notification)
    setNotifications((prev) =>
      prev.map((notification, i) =>
        i === index ? `${notification} (read)` : notification
      )
    );

    // If you want to call an API to mark it as read, you can do that here
    // await fetch(`https://c15-backend-s9le.onrender.com/api/notifications/${id}`, { method: "PUT" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon} onClick={toggleNotifications}>
        🔔
      </div>
      {isOpen && (
        <div style={styles.panel}>
          <h3 style={styles.title}>Notifications</h3>
          <ul style={styles.list}>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.item,
                    backgroundColor: notification.includes("(read)") ? "#e8e8e8" : "#fff",
                  }}
                >
                  {notification}
                  {!notification.includes("(read)") && (
                    <button
                      style={styles.readButton}
                      onClick={() => markAsRead(index)}
                    >
                      Mark as read
                    </button>
                  )}
                </li>
              ))
            ) : (
              <li style={styles.noMessage}>No notifications</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;

const styles = {
  container: {
    position: "fixed",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
  },
  icon: {
    fontSize: "24px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
  panel: {
    position: "absolute",
    left: "60px",
    top: "0",
    backgroundColor: "#fff",
    color:"black",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "300px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    padding: "15px",
    maxHeight: "400px", // Limit the height
    overflowY: "auto", // Enable vertical scrolling
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  item: {
    padding: "12px",
    borderBottom: "1px solid #eee",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.3s",
  },
  noMessage: {
    fontSize: "14px",
    textAlign: "center",
    padding: "10px",
    color: "#aaa",
  },
  readButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    fontSize: "12px",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

// Add hover effect for the read button
styles.readButton.hover = {
  backgroundColor: "#218838", // Darker green on hover
};

// Add hover effect for notification items
styles.item.hover = {
  backgroundColor: "#f1f1f1", // Light gray on hover
};