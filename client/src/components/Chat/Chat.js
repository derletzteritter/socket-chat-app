import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

import styled from 'styled-components';
import './Chat.css'

import Header from '../Header/Header';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import UsersMap from '../UsersMap/UsersMap';


const ChatContainer = styled('div')`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #424242;
    text-align: center;
    width: 1000px;
    height: 700px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;


let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'https://chat-application-re.herokuapp.com/'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });

        
        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search]);

    // ==============================

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });

    }, [messages]);

    


    const sendMessage = (e) => {
        e.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return(
        <ChatContainer>
            <div className='container'>
                <Header room={room}/>
                <Messages  messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <div>
                <UsersMap users={users}/>
            </div>
        </ChatContainer>
    )
}

export default Chat;


