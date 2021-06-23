import React from 'react';
import './Chat.css';
import { IconButton, Avatar, } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicIcon from '@material-ui/icons/Mic';


const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton >
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Mayank</span>
                    This is message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__reciver">
                    <span className="chat__name">Mayank</span>
                    This is message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <SentimentSatisfiedOutlinedIcon />
                <form>
                    <input placeholder="Type a message" type="text"/>
                    <button  type="submit">
                        Send Message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}



export default Chat;