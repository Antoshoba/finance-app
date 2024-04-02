import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

import React from 'react';

const QuestionComponent = ({ question, answer, handleChange }) => {
  return (
    <div>
      <Typography variant="body1" display={"none"}>{question}</Typography>
      <FormControl sx={{ minWidth: "300px", marginTop: 1 }}>
        <InputLabel id="demo-simple-select-label">Select an answer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={answer}
          label="Select an answer"
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
          <MenuItem value="Option 4">Option 4</MenuItem>
          <MenuItem value="Option 5">Option 5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default QuestionComponent;
