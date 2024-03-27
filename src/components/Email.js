// EmailForm.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EmailForm() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save email to state or context
    history.push('/quiz');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}

export default EmailForm;