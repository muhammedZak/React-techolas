import React from 'react';
import '../styles/ProfileCard.css';

const ProfileCard = ({ name, course, age }) => {
  return (
    <div id='profile-card'>
      <p>
        <b>Name:</b> {name} | <b>Course:</b> {course} | <b>Age:</b> {age}
      </p>
    </div>
  );
};

export default ProfileCard;
