import { Tab, Tabs, Typography } from '@mui/material';

import React from 'react';

const TabsComponent = ({ tabValue, handleChange }) => {
  const tabs = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

  return (
    <Tabs value={tabValue} onChange={handleChange}>
      {tabs.map((tab, index) => (
        <Tab key={index} label={<Typography variant="body1">{tab}</Typography>} />
      ))}
    </Tabs>
  );
};

export default TabsComponent;
