import React from 'react';

const MentorShipSession = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#90EE90',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>These are the ways to contact with your mentor</h2>
      <ul style={listStyle}>
      <a href="https://meet.google.com/">
        <li
          style={listItemStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
          Google Meet
          
        </li></a>
        <a href="https://teams.microsoft.com/">
       <li
          style={listItemStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
          Teams
          
        </li></a>
        <a href="https://zoom.us/">
       <li
          style={listItemStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
          ZoomMeeting
          
        </li></a>
       
        <li
          style={listItemStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#90EE90'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
          Direct Call
        </li>
        <li
          style={listItemStyle}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
          WhatsApp Call
        </li>
      </ul>
    </div>
  );
};

export default MentorShipSession;
