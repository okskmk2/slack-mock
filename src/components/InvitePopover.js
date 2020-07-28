import React from "react";

const InvitePopover = () => {
  return (
    <div className="popover invite-popover">
      <div className="title">Workspace Member</div>
      <div className="invite-popover-btn">
        <i className="material-icons">add</i>
        <span>Add Workspace Members</span>
      </div>
      <div>
        <div className="invite-popover-card">
          <img alt='user-avatar'/>
          <div className='employee-desc'>
            <div></div>
            <div className="employee-name">employee name</div>
            <div className="role-name">role name / group name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitePopover;
