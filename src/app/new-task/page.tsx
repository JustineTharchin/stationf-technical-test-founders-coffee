"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchData();
  }, []);

  return (
  <div>
    <h1>New Task</h1>

      <button type="submit">Add Tasks</button>

  </div>
  );
};

export default Tasks;
