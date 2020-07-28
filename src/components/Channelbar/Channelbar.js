import React, { useState } from "react";
import ChannelbarSearch from "./ChannelbarSearch";
import ChannelbarNotice from "./ChannelbarNotice";
import ChannelbarFile from "./ChannelbarFile";
import ChannelbarLink from "./ChannelbarLink";

const Channelbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotice, setOpenNotice] = useState(false);
  const [openFile, setOpenFile] = useState(false);
  const [openLink, setOpenLink] = useState(false);

  return (
    <div className="channelbar">
      {openSearch && <ChannelbarSearch setOpenSearch={setOpenSearch} />}
      {openNotice && <ChannelbarNotice setOpenNotice={setOpenNotice} />}
      {openFile && <ChannelbarFile setOpenFile={setOpenFile} />}
      {openLink && <ChannelbarLink setOpenLink={setOpenLink} />}
      <nav className="channelbar-nav">
        <button
          className="material-icons"
          onClick={() => {
            setOpenSearch(!openSearch);
            setOpenNotice(false);
            setOpenFile(false);
            setOpenLink(false);
          }}
        >
          search
        </button>
        <button
          className="material-icons"
          onClick={() => {
            setOpenNotice(!openNotice);
            setOpenSearch(false);
            setOpenFile(false);
            setOpenLink(false);
          }}
        >
          campaign
        </button>
        <button
          className="material-icons"
          onClick={() => {
            setOpenFile(!openFile);
            setOpenSearch(false);
            setOpenNotice(false);
            setOpenLink(false);
          }}
        >
          source
        </button>
        <button
          className="material-icons"
          onClick={() => {
            setOpenLink(!openLink);
            setOpenSearch(false);
            setOpenNotice(false);
            setOpenFile(false);
          }}
        >
          link
        </button>
      </nav>
    </div>
  );
};

export default Channelbar;
