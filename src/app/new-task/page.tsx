"use client"
import React from 'react';
import Header from '../components/Header'

interface NewTaskProps {}

const NewTask: React.FC<NewTaskProps> = () => {
  return (
    <div>
      <Header />
      <h1>Add New Task</h1>
        <button type="submit">Add Task</button>
    </div>
  );
};

export default NewTask;
