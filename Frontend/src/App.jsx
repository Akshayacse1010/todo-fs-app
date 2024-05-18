import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
function AddUserForm() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3000/addUser/addUser',
        {
          name,
          job,
        }
      );
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
