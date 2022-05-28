import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon } from '@material-ui/icons';
import { Axios } from './Axios';
import { v4 as uuidv4, v4 } from 'uuid';
import { useStateValue } from './StateProvider';
import './Chat.css';

const Chat = ({ msgs }) => {
    //console.log(msgs)

    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 500))
    }, []);

    const sendMessage = async (e) => {
        e.preventDefault();
        await Axios.post('/messages/new', {
            id: uuidv4(),
            message: input,
            name: user.action.displayName,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            received: true
        });
        setInput('');
    };

    const handledChange = (e) => {
        //console.log(e.target.value);
        setInput(e.target.value);
    };

    /*para formatear la fecha y hora
     {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
    */
    return (
        <div className='Chat'>
            <div className='Chat__header'>
                <Avatar src={`https://joeschmoe.io/api/v1/female/${seed}`} />
                <div className='Chat__headerInfo'>
                    <h3>Name</h3>
                    <p>{msgs[msgs.length - 1].timestamp}</p>
                </div>
                <div className='Chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='Chat__body'>
                {msgs.map(message => (
                    <p key={message.id} className={`Chat__message ${message.name == user.action.displayName && 'Chat__receiver'}`}>
                        <span className='Chat__name'>{message.name}</span>
                        {message.message}
                        <span className='Chat__timestamp'>
                            {message.timestamp}
                        </span>
                    </p>

                ))}


            </div>
            <div className='Chat__footer'>
                <InsertEmoticon />
                <form>
                    <input type='text' placeholder='write a message there' value={input} onChange={handledChange} />
                    <button type='submit' onClick={sendMessage}>send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;