import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  border-radius: 15px;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
`;

const TimeIntervalButtons = ({ onIntervalChange }) => {
  return (
    <ButtonContainer>
      <Button onClick={() => onIntervalChange('3hours')}>3 Hours</Button>
      <Button onClick={() => onIntervalChange('24hours')}>24 Hours</Button>
      <Button onClick={() => onIntervalChange('7days')}>7 Days</Button>
      <Button onClick={() => onIntervalChange('30days')}>30 Days</Button>
      <Button onClick={() => onIntervalChange('1year')}>1 Year</Button>
    </ButtonContainer>
  );
};

export default TimeIntervalButtons;
