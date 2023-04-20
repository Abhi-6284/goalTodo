import React, { useState } from 'react';

import styled from 'styled-components'

import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${props => props.invalid? '#000':'#ff0000'};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    background: none;
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid? '#ccc':'#ff0000'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: none;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [inValid, setInValid] = useState(false);

  const goalInputChangeHandler = e => {
    if (e.target.value.trim().length > 0) {
      setInValid(false);
    }else{
      setInValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    if(enteredValue.trim().length === 0) {
      alert('Please enter Something');
      setInValid(true);
      return false;
    }
    setInValid(false);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!inValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
