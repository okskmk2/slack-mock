import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Channel from './Channel'
import ChannelSidebar from './ChannelSidebar'

const Workspace = () => {
    return (
        <div className='workspace'>
            <ChannelSidebar />
            <Switch>
                <Route path="/workspaces/:workspaceId/channels/:channelId" component={Channel} />
                <Redirect to="/workspaces/:workspaceId/channels/1"/>
            </Switch>
        </div>
    )
}

export default Workspace