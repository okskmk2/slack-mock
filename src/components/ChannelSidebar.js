import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ChannelSidebar = () => {
    const { workspaceId } = useParams();
    return (
        <div className='channel-sidebar'>
            <div className='workspace-title-container'>
                <div>workspaceId : {workspaceId}</div>
                <i className="material-icons">more_vert</i>
            </div>
            {
                [1, 2, 3, 4, 5].map(v => (
                    <Link to={`/workspaces/${workspaceId}/channels/${v}`} key={v} className='channel-sidebar-item'>channel {`${v}`}</Link>
                ))
            }
            <div>
                <button>Create Channel</button>
                <button>App Directory</button>
            </div>
        </div>
    )
}

export default ChannelSidebar
