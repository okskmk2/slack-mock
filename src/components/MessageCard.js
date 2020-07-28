import React from "react";

const MessageCard = (props) => {
  return (
    <div className="message-card">
      <div>
        <img src="" alt="userid" className='sender-avatar'/>
      </div>
      <div>
        <div>
          <span>{props.username}</span>
          <span>{props.dttm}</span>
          {props.isImportantMessage && <span>| <i className='material-icons'>turned_in</i> important</span>}
        </div>
        <div className="message-content">
            {props.message}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
