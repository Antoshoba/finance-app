import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

import React from 'react';

const Message = ({ text, isSent }) => {
  return (
    <ListItem sx={{ justifyContent: isSent ? 'flex-end' : 'flex-start' }}>
      <ListItemText>
        <Paper
          elevation={3}
          sx={{
            py: 1,
            px: 2,
            maxWidth: '70%',
            bgcolor: isSent ? 'primary.main' : 'background.paper',
            color: isSent ? 'primary.contrastText' : 'text.primary',
            borderRadius: isSent ? '10px 0 10px 10px' : '0 10px 10px 10px'
          }}
        >
          <Typography variant="body1">{text}</Typography>
        </Paper>
      </ListItemText>
    </ListItem>
  );
};

export default Message;
