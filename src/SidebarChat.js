import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css'

const SidebarChat = () => {
    return (
    <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>This is side bar</p>
        </div>
    </div>
    );
}



export default SidebarChat;