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
                <div className='chatroom-input-container'>
                    <div className='chatroom-icons-left'>
                        <i className="material-icons">add</i>
                        <i className="material-icons">crop_square</i>
                    </div>
                    <input className='chatroom-input'/>
                </div>
            </div>
            <ChatSidebar />
        </div>
    )
}

export default Channel
