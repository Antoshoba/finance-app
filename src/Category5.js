import MessageList from './MessageList';
import React from 'react';

const Category5 = () => {
  const messages = [
    { text: 'Hello!', isSent: true },
    { text: 'Hi there!', isSent: false },
    { text: 'How are you?', isSent: true },
    { text: 'I am doing well, thank you!', isSent: false }
  ];

  return (
    <div>
      <h1>Message Conversation</h1>
      <MessageList messages={messages} />
    </div>
  );
};

export default Category5;
