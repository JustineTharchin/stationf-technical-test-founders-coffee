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
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/`}>
                {task.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
