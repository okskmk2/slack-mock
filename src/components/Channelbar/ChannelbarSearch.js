import React from "react";

const ChannelbarSearch = (props) => {
  return (
    <div className="channelbar-sub">
      <header>
        <div>Search</div>
        <button
          className="material-icons"
          onClick={() => {
            props.setOpenSearch(false);
          }}
        >
          clear
        </button>
      </header>
    </div>
  );
};

export default ChannelbarSearch;
