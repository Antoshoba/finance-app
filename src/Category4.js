import { Button, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from '@mui/material';
import React, { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

const Category4 = () => {
  const [inputValue, setInputValue] = useState('');
  const [links, setLinks] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setLinks([...links, inputValue]);
    setInputValue('');
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };
  const handleDeleteLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  return (
    <div>
      <TextField
        label="Enter URL"
        value={inputValue}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      <List>
        {links.map((link, index) => (
          <ListItem key={index} button onClick={() => handleLinkClick(link)}>
            <ListItemText primary={link} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteLink(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Category4;

// import { Button, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField } from '@mui/material';
// import React, { useState } from 'react';

// import DeleteIcon from '@mui/icons-material/Delete';

// const Category4 = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [links, setLinks] = useState([]);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddLink = () => {
//     if (inputValue.trim() !== '') {
//       setLinks([...links, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteLink = (index) => {
//     const updatedLinks = [...links];
//     updatedLinks.splice(index, 1);
//     setLinks(updatedLinks);
//   };

//   return (
//     <div>
//       <TextField
//         label="Enter URL"
//         variant="outlined"
//         value={inputValue}
//         onChange={handleInputChange}
//         fullWidth
//       />
//       <Button variant="contained" onClick={handleAddLink} style={{ marginTop: '10px' }}>
//         Add Link
//       </Button>
//       <List style={{ marginTop: '20px' }}>
//         {links.map((link, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={link} />
//             <ListItemSecondaryAction>
//               <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteLink(index)}>
//                 <DeleteIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default Category4;

