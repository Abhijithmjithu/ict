import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <h2 className="profile-heading">User Profile</h2>
      <img className="profile-photo" src="https://via.placeholder.com/150" alt="User" />
      <div className="profile-item">
        <label className="profile-label">Name:</label>
        <div className="profile-value">John Doe</div>
      </div>
      <div className="profile-item">
        <label className="profile-label">Phone Number:</label>
        <div className="profile-value">+1234567890</div>
      </div>
      <div className="profile-item">
        <label className="profile-label">Email ID:</label>
        <div className="profile-value">johndoe@example.com</div>
      </div>
      <div className="profile-item">
        <label className="profile-label">Gender:</label>
        <div className="profile-value">Male</div>
      </div>
      <div className="profile-item">
        <label className="profile-label">Address:</label>
        <div className="profile-value">123 Main St, City, Country</div>
      </div>
      <button className="logout-button">Log Out</button>
    </div>
  );
}

export default Profile;
