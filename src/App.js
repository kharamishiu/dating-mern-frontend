import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { Axios } from './components/Axios';
import { useStateValue } from './components/StateProvider';
import './App.css';

function App() {
  const [messages, setMessage] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  

  useEffect(() => {
    Axios.get('/messages/sync')
      .then(res => {
        setMessage(res.data)
      })
      .catch(err => console.log(new Error(err)))
  }, []);

  useEffect(() => {

    const pusher = new Pusher('b51786840fa388cda031', {
      cluster: 'sa1'
    });
    const channel = pusher.subscribe('canal-01');
    channel.bind('inserted', (data) => {
      setMessage([...messages, data])
      //alert(JSON.stringify(data))
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  return (
    <div className="App">

      {!user ? <Login /> : (
        <div className="App__body">
          <Sidebar msgs={messages} />
          <Chat msgs={messages} />
        </div>
      )}
    </div>
  );
}

export default App;
