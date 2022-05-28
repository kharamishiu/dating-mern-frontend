import React, { useState, useEffect } from 'react';
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';

const SidebarChat = ({ messages }) => {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 500))
    }, [])
    console.log(messages)
    return (
        <div className='SidebarChat'>
            <Avatar src={`https://joeschmoe.io/api/v1/female/${seed}`} />
            <div className='SidebarChat__info'>
                <h2>Name</h2>
                <p>{messages[messages.length - 1].timestamp}</p>
            </div>
        </div>
    )
}
export default SidebarChat;