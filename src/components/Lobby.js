import React from 'react'
import { Link } from 'react-router-dom'

const Lobby = () => {
    return (
        <div className='lobby'>
           <h1>Lobby</h1>
           <button>Add Workspace</button>
           <div>
           {
                [
                    {
                        id: 1,
                        title: 'External'
                    },
                    {
                        id: 2,
                        title: 'User'
                    },
                    {
                        id: 3,
                        title: 'VScode'
                    }
                ].map(v=>(
                    <Link to={`/workspaces/${v.id}`} key={v.id}>
                        <div className='lobby-workspace-item'>{v.title}</div></Link>
                ))
            }
           </div>
        </div>
    )
}

export default Lobby