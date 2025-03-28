import React from 'react';

// Sample event data
const events = [
  {
    id: 1,
    title: 'Community Workshop on Woodworking',
    date: 'August 15, 2024',
    description: 'Join us for an interactive workshop where you can learn woodworking skills from experienced artisans.',
    location: 'Community Center, Main Hall',
  },
  {
    id: 2,
    title: 'Tech Skills Seminar',
    date: 'August 22, 2024',
    description: 'A seminar focused on coding and technology, featuring industry experts and hands-on sessions.',
    location: 'Tech Hub, Conference Room 2',
  },
  {
    id: 3,
    title: 'Gardening Tips and Tricks',
    date: 'August 29, 2024',
    description: 'Learn the best practices for gardening, including planting techniques and maintenance tips from seasoned gardeners.',
    location: 'Greenhouse, Garden Area',
  }
];

const EventsPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ color: '#333', textAlign: 'center', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Upcoming Events</h2>
      <div>
        {events.map(event => (
          <div key={event.id} style={{
            marginBottom: '20px',
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#90EE90',
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
            <h3 style={{ margin: '0 0 10px', color: '#333' }}>{event.title}</h3>
            <p style={{ margin: '0 0 5px', color: '#777' }}><strong>Date:</strong> {event.date}</p>
            <p style={{ margin: '0 0 5px', color: '#777' }}><strong>Location:</strong> {event.location}</p>
            <p style={{ margin: '0', color: '#555' }}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
