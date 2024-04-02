import React, { useState } from 'react';

import { Button } from '@mui/material';
import QuestionComponent from './QuestionComponent';
import TabsComponent from './TabsComponent';

const Category1 = () => {
  const [tabValue, setTabValue] = useState(0);
  const [answers, setAnswers] = useState(Array(20).fill('')); // Assuming 4 tabs * 5 questions per tab = 20

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[tabValue * 5 + index] = value;
    setAnswers(newAnswers);
  };

  const handlePrev = () => {
    setTabValue((prevTabValue) => Math.max(0, prevTabValue - 1));
  };

  const handleNext = () => {
    setTabValue((prevTabValue) => Math.min(3, prevTabValue + 1));
  };

  const questions = [
    ["Who Directed You Here?", "Spouse/Partner?", "Any Children? (Minor or Adult)", "About how much money does your household bring in yearly?", "More or less what percentage of your income is from salary or hourly wages?"],
    ["Question 6", "Question 7", "Question 8", "Question 9", "Question 10"],
    ["Question 11", "Question 12", "Question 13", "Question 14", "Question 15"],
    ["Question 16", "Question 17", "Question 18", "Question 19", "Question 20"]
  ];

  return (
    <div>
      <TabsComponent tabValue={tabValue} handleChange={handleChangeTab} />
      {questions[tabValue].map((question, index) => (
        <QuestionComponent
          key={index}
          question={question}
          answer={answers[tabValue * 5 + index]}
          handleChange={(value) => handleChangeAnswer(index, value)}
        />
      ))}
      <div sx={{marginTop:"15px"}}>
        <Button variant="contained" onClick={handlePrev} disabled={tabValue === 0}>Previous</Button>
        <Button variant="contained" onClick={handleNext} disabled={tabValue === 3}>Next</Button>
      </div>
    </div>
  );
};

export default Category1;
