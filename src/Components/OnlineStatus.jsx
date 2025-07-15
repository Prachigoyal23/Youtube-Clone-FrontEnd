// OnlineStatus.js
import React from "react";
import useOnlineStatus from "../Context/useOnlineStatus";

const OnlineStatus = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h3>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</h3>
    </div>
  );
};

export default OnlineStatus;
