import React, { useState } from 'react';



const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skill: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword, skill, description } = formData;
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!skill) newErrors.skill = 'Skill is required';
    if (!description) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        // Simulating a successful signup (since PHP backend is removed)
        setSuccessMessage('Signup successful (No backend connected yet)');
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          skill: '',
          description: '',
        });
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
  };
  

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: 'auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Signup</h2>
      {successMessage && <p style={{ color: 'green', textAlign: 'center' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', color: '#555' }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginTop: '5px'
            }}
          />
          {errors.name && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.name}</p>}
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', color: '#555' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginTop: '5px'
            }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.email}</p>}
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', color: '#555' }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginTop: '5px'
            }}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.password}</p>}
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', color: '#555' }}>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginTop: '5px'
            }}
          />
          {errors.confirmPassword && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.confirmPassword}</p>}
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', color: '#555' }}>
          Skill:
          <input
            type="text"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginTop: '5px'
            }}
          />
          {errors.skill && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.skill}</p>}
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', color: '#555' }}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginTop: '5px',
              resize: 'vertical',
              minHeight: '100px'
            }}
          />
          {errors.description && <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.description}</p>}
        </label>
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
