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
            <div>
                <button>Create Channel</button>
            </div>
            {
                [1, 2, 3, 4, 5].map(v => (
                    <Link to={`/workspaces/${workspaceId}/channels/${v}`} key={v}>channel {`${v}`}</Link>
                ))
            }
        </div>
    )
}

export default ChannelSidebar
