import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // const response = await axios.post(`${API_URL}/api/contacts/`,
      const response = await axios.post('http://localhost:8000/api/contacts/', {
        name,
        phone,
      });
      alert('Contact saved successfully!');
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Error saving contact:', error.response ? error.response.data : error.message);
      setError(error.response ? 
        JSON.stringify(error.response.data) : 
        'An error occurred while saving the contact'
      );
    }
  };

  return (
    <div style={{ margin: '50px' }}>
      <h1>Save Contact</h1>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;