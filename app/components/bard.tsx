import React from 'react';
import "./bardstyle.css";
import bard from "../icons/bard.png";

const BardAvatar = () => {
  return (
    <div className="user-avatar">
      <img
        src={bard}
        className="uav-bard"
      />
    </div>
  );
};
export default BardAvatar;
