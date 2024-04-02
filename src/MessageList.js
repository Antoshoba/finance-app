import { List } from '@mui/material';
import Message from './Message';
import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <List>
      {messages.map((message, index) => (
        <Message key={index} text={message.text} isSent={message.isSent} />
      ))}
    </List>
  );
};

export default MessageList;
