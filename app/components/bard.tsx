import React from 'react';
import "./bardstyle.css";
import bardIcon from "../icons/bard.svg";

const BardAvatar = () => {
  return (
    <div className="user-avatar">
      <img
        src={bardIcon} 
        className="user-avatar-img"
      />
    </div>
  );
};
export default BardAvatar;
