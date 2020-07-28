import React from "react";

const ChannelbarLink = (props) => {
  return (
    <div className="channelbar-sub">
      <header>
        <div>Link</div>
        <button
          className="material-icons"
          onClick={() => {
            props.setOpenLink(false);
          }}
        >
          clear
        </button>
      </header>
    </div>
  );
};

export default ChannelbarLink;
