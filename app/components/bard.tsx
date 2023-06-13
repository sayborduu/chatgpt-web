import React from 'react';
import "./bardstyle.css";
import { ReactComponent as bardIcon } from "../icons/bard.svg";

const BardAvatar = () => {
    const svgString = new XMLSerializer().serializeToString(bardIcon);
  return (
    <div className="user-avatar">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
        className="uav-bard"
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
    </div>
  );
};
export default BardAvatar;
