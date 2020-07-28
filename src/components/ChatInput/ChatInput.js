import React, { useState, useRef } from "react";
import ChatInputTranslator from "./ChatInputTranslator";
import ChatInputAppBrowser from "./ChatInputAppBrowser";
import socket from "../socket";

const ChatInput = () => {
  const chatInputRef = useRef();
  const fileRef = useRef();
  const [openTranslator, setOpenTranslator] = useState(false);
  const [openAppBrowser, setOpenAppBrowser] = useState(false);

  const enterInput = (e) => {
    if (e.keyCode === 13) {
      let message = chatInputRef.current.value;
      socket.emit("message", message);
      chatInputRef.current.value = "";
    }
  };

  return (
    <div className="chatinput">
      <div className="chatinput-core">
        <div>
          <input
            type="file"
            ref={fileRef}
            className="hide"
            onChange={() => {
              console.log('파일을 세팅했습니다.', fileRef.current.value);
            }}
          />
          <button
            className="material-icons"
            onClick={() => {
              fileRef.current.click();
            }}
          >
            attach_file
          </button>
          <button
            className="material-icons"
            onClick={() => {
              setOpenAppBrowser(!openAppBrowser);
              setOpenTranslator(false);
            }}
          >
            apps
          </button>
        </div>
        <div className="chatinput-input-container">
          {openAppBrowser && <ChatInputAppBrowser />}
          <div className="row">
            <input
              type="text"
              ref={chatInputRef}
              onKeyDown={(e) => {
                enterInput(e);
              }}
            />
            {openTranslator && (
              <select>
                <option value="en">English</option>
                <option value="ko">한국어</option>
              </select>
            )}
          </div>
          {openTranslator && <ChatInputTranslator />}
        </div>
        <div>
          <button className="material-icons">insert_emoticon</button>
          <button
            onClick={() => {
              setOpenTranslator(!openTranslator);
              setOpenAppBrowser(false);
              chatInputRef.current.focus();
            }}
            className="material-icons"
          >
            translate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
