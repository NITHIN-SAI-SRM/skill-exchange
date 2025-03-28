import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333', textAlign: 'center', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>About Us</h2>
      
      <section style={{
        marginBottom: '20px',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#fff';
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
      }}>
        <h3 style={{ color: '#555', marginBottom: '10px' }}>Our Mission</h3>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          At the Intergenerational Skill Exchange Network (ISEN), our mission is to bridge the gap between generations through skill sharing and mutual learning. We believe that every individual, regardless of age, has valuable skills and experiences to contribute.
        </p>
      </section>

      <section style={{
        marginBottom: '20px',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#fff';
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
      }}>
        <h3 style={{ color: '#555', marginBottom: '10px' }}>Our Values</h3>
        <ul style={{ lineHeight: '1.6', color: '#555', listStyleType: 'circle', paddingLeft: '20px' }}>
          <li>Respect: We value and honor the experiences and knowledge of every participant.</li>
          <li>Collaboration: We promote teamwork and cooperation across generations.</li>
          <li>Learning: We strive for continuous learning and growth for all members.</li>
          <li>Inclusivity: We ensure that all voices are heard and valued.</li>
        </ul>
      </section>

      <section style={{
        marginBottom: '20px',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#fff',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#fff';
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
      }}>
        <h3 style={{ color: '#555', marginBottom: '10px' }}>Contact Us</h3>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          If you have any questions or would like to get involved, please reach out to us at:
        </p>
        <p style={{ lineHeight: '1.6', color: '#777' }}>
          <strong>Email:</strong> nithinsai7288@gmail.com<br />
          <strong>Phone:</strong> 7288927819
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
