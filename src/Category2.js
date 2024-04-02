import React, { useState } from 'react';

import { Button } from '@mui/material';
import QuestionComponent from './QuestionComponent';
import TabsComponent from './TabsComponent';

const Category2 = () => {
  const [tabValue, setTabValue] = useState(0);
  const [answers, setAnswers] = useState(['', '', '', '', '', '', '', '', '', '']);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handlePrev = () => {
    setTabValue((prevTabValue) => Math.max(0, prevTabValue - 1));
  };

  const handleNext = () => {
    setTabValue((prevTabValue) => Math.min(3, prevTabValue + 1));
  };

  const questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
  ];

  return (
    <div>
      <TabsComponent tabValue={tabValue} handleChange={handleChangeTab} />
      <QuestionComponent
        question={questions[tabValue]}
        answer={answers[tabValue]}
        handleChange={(value) => handleChangeAnswer(tabValue, value)}
      />
      <div>
        <Button variant="contained" onClick={handlePrev} disabled={tabValue === 0}>Previous</Button>
        <Button variant="contained" onClick={handleNext} disabled={tabValue === 3}>Next</Button>
      </div>
    </div>
  );
};

export default Category2;
