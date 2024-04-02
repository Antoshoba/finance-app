import {
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

const Message = ({ content, onDelete }) => {
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item xs={11}>
        {/* <Paper style={{ padding: 10 }}>
          <Typography>{content}</Typography>
        </Paper> */}
          <Paper
          elevation={3}
          sx={{
            padding: 10,
            marginBottom:"15px",
            py: 1,
            px: 2,
            maxWidth: '70%',
            bgcolor: !content ? 'primary.main' : 'background.paper',
            color: !content ? 'primary.contrastText' : 'text.primary',
            borderRadius: !content ? '10px 0 10px 10px' : '0 10px 10px 10px'
          }}
        >
          <Typography variant="body1">{content}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={1} style={{ textAlign: 'center' }}>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const Conversation = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Message Conversations
      </Typography>
      <Divider />
      <div style={{ marginTop: 20 }}>
        {messages.map((message, index) => (
          <Message
            key={index}
            content={message}
            onDelete={() => handleDeleteMessage(index)}
          />
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleMessageSubmit}
          style={{ marginTop: 10 }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Conversation;
