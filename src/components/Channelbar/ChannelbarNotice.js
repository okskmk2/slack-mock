import React from "react";

const ChannelbarNotice = (props) => {
  return (
    <div className="channelbar-sub">
      <header>
        <div>Notice</div>
        <button
          className="material-icons"
          onClick={() => {
            props.setOpenNotice(false);
          }}
        >
          clear
        </button>
      </header>
    </div>
  );
};

export default ChannelbarNotice;
