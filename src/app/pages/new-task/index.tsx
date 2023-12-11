import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NewTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          completed: false,
        }),
      });

      if (response.ok) {
        router.push('/tasks');
      } else {
        console.error('Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div>
      <h1>New Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default NewTask;
