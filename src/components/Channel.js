import React from "react";
import ChatRoom from "./ChatRoom";
import Channelbar from "./Channelbar/Channelbar";
import { useParams } from "react-router";

const Channel = () => {
  const { channelId } = useParams();
  return (
    <div className="channel">
      <div className="channel-container">
        <header>
          <div className="title">channel name {channelId}</div>
          <div className="icon-group">
            <button className="material-icons">person</button>
            <button className="material-icons">notifications</button>
            <button className="material-icons">more_vert</button>
          </div>
        </header>
        <ChatRoom />
      </div>
      <Channelbar />
    </div>
  );
};

export default Channel;
