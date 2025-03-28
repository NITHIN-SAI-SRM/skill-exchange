import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
     
      {/* Main Banner */}
      <section style={{ padding: '40px', backgroundColor: '#b2dfdb', textAlign: 'center' }}>
        <h1>Welcome to the Intergenerational Skill Exchange Network</h1>
        <p>Bringing together different generations to share and learn valuable skills.</p>
        <div style={{ marginTop: '20px' }}>
          <Link to="/SignupPage" className="button" style={{ padding: '10px 20px', backgroundColor: '#004d40', color: '#ffffff', textDecoration: 'none', borderRadius: '5px' }}>Join Us</Link>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '20px' }}>
        <h2>How It Works</h2>
        <p>Our network connects people from different generations to exchange skills and knowledge. Here's how it works:</p>
        <ol>
          <li>Sign Up and Create a Profile</li>
          <li>Browse Skills and Connect with Others</li>
          <li>Schedule Skill Exchanges and Learn</li>
          <li>Share Your Skills and Make an Impact</li>
        </ol>
      </section>

      {/* Featured Skills/Success Stories */}
      <section style={{ padding: '20px', backgroundColor: '#e0f2f1' }}>
        <h2>Featured Skills and Success Stories</h2>
        <div>
          <h3>Skills Exchange</h3>
          {/* List of featured skills or success stories */}
          <div>
            <h4>Woodworking</h4>
            <p>Learn precision woodworking from experienced artisans.</p>
          </div>
          <div>
            <h4>Digital Literacy</h4>
            <p>Improve your tech skills with the help of knowledgeable mentors.</p>
          </div>
        </div>
        <div>
          <h3>Success Stories</h3>
          <p>Read about how our participants have benefited from the skill exchanges.</p>
          {/* Testimonials or stories */}
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ padding: '20px' }}>
        <h2>Upcoming Events</h2>
        <ul>
          <li><strong>Workshop on Gardening</strong> - August 10, 2024</li>
          <li><strong>Digital Skills Seminar</strong> - August 15, 2024</li>
          {/* Add more events */}
        </ul>
      </section>

      {/* Get Involved */}
      <section style={{ padding: '20px', backgroundColor: '#e8f5e9' }}>
        <h2>Get Involved</h2>
        <p>Interested in joining our network or contributing? Find out how you can get involved.</p>
        <Link to="/SignupPage" className="button" style={{ padding: '10px 20px', backgroundColor: '#00796b', color: '#ffffff', textDecoration: 'none', borderRadius: '5px' }}>Join Us</Link>
        {/* <Link to="/volunteer" className="button" style={{ padding: '10px 20px', backgroundColor: '#004d40', color: '#ffffff', textDecoration: 'none', borderRadius: '5px', marginLeft: '10px' }}>Volunteer</Link> */}
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px', backgroundColor: '#004d40', color: '#ffffff', textAlign: 'center' }}>
        <p>Contact us: 7288927819| nithinsai7288@gmail.com</p>
        <p>Follow us: <a href="https://www.instagram.com/nithin_manchikalapudi/" style={{ color: '#ffffff' }}>Follow us on Instagram </a> | <a href="https://x.com/Nithins72282863" style={{ color: '#ffffff' }}>Follow us on X</a></p>
        <p>&copy; 2024 Intergenerational Skill Exchange Network. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
