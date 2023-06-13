import React from 'react';
import "./bardstyle.css";
import bardIcon from "../icons/bard.svg";

const BardAvatar = () => {
  return (
    <div className="user-avatar">
      <img
        src={bardIcon} 
        className="uav-bard"
      />
    </div>
  );
};
export default BardAvatar;
