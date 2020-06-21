import React from 'react'
import { Link } from 'react-router-dom'

const WorkspaceSidebar = () => {
    return (
        <div className='workspace-sidebar'>
            <Link to='/workspaces'><i className="material-icons">home</i></Link>
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
                    <Link to={`/workspaces/${v.id}`} className='workspace-sidebar-item' key={v.id}>{v.title}</Link>
                ))
            }
        </div>
    )
}

export default WorkspaceSidebar
