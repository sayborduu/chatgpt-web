import React from 'react';
import Image from "next/image";
import "./bardstyle.css";
import bard from "../icons/bard.png";

const BardAvatar = () => {
  return (
    <div className="user-avatar">
      <Image
        src={bard}
        className="uav-bard"
      />
    </div>
  );
};
export default BardAvatar;
