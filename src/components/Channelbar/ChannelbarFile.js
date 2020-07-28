import React from "react";

const ChannelbarFile = (props) => {
  return (
    <div className="channelbar-sub">
      <header>
        <div>File</div>
        <button
          className="material-icons"
          onClick={() => {
            props.setOpenFile(false);
          }}
        >
          clear
        </button>
      </header>
    </div>
  );
};

export default ChannelbarFile;
