import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import portada from './portada.png';
import { useStateValue } from './StateProvider';
import './Sidebar.css';

const Sidebar = ({ msgs }) => {
    const [{ user }, dispatch] = useStateValue();
    //console.log(user.action.photoURL)
    return (
        <div className='Sidebar'>
            <div className='Sidebar__header'>
                <Avatar src={user.action.photoURL} />
                <div className='Sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='Sidebar__search'>
                <div className='Sidebar__searchContainer'>
                    <SearchOutlined />
                    <input type='text' placeholder='start new chat'></input>
                </div>
            </div>
            <div className='Sidebar__chats'>
                <SidebarChat messages={msgs} />
            </div>
        </div>
    )
};

export default Sidebar;