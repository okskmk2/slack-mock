import React from 'react'
import ChatSidebar from './ChatSidebar'
import { useParams } from 'react-router-dom'

const Channel = () => {
    const { channelId } = useParams();
    return (
        <div className='channel'>
            <div className='chatroom'>
                <div className='chatroom-title'>
                <h3>channel : {channelId}</h3>
                </div>
                <div>
                    <input/>
                </div>
            </div>
            <ChatSidebar />
        </div>
    )
}

export default Channel
