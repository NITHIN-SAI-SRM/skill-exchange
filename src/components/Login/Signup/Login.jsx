// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,20}$/;

//     if (!emailPattern.test(email)) {
//       alert('Please enter a valid email address.');
//       return false;
//     }

//     if (!passwordPattern.test(password)) {
//       alert('Password must contain both letters and numbers and must not exceed 20 characters.');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       // Handle successful form submission (e.g., send data to backend)
//       console.log('Form submitted successfully!');
//       // Navigate to the HomePage after successful login
//       navigate('/HomePage');
//     }
//   };

//   return (
//     <div>
//       <h2>Login Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="email" style={{ display: 'block' }}>Email:</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="password" style={{ display: 'block' }}>Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//             required
//           />
//         </div>
//         <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Login</button>
     
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
