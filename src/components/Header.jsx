import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
       {/* Header */}
       <header style={{ padding: '20px', backgroundColor: '#00695c', color: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">Intergenerational Skill Exchange Network</div>
          <nav>
            <Link to="/HomePage" style={{ margin: '0 15px', color: '#ffffff' }}>Home</Link>
            <Link to="/Details" style={{ margin: '0 15px', color: '#ffffff' }}>Details</Link>
            
            
            
  <a href="/SkillMapping"  style={{ margin: '0 15px', color: '#ffffff' }}>Skill Mapping</a> {/* Forbidden fruit */}


            <Link to="/events" style={{ margin: '0 15px', color: '#ffffff' }}>Events</Link>
            <Link to="/SignupPage" style={{ margin: '0 15px', color: '#ffffff' }}>Signup</Link>
            <Link to="/AboutUs" style={{ margin: '0 15px', color: '#ffffff' }}>About Us</Link>
            <Link to="/MentorShipSession" style={{ margin: '0 15px', color: '#ffffff' }}>MentorShip Session</Link>
            {/* <Link to="/" style={{ margin: '0 15px', color: '#ffffff' }}>Logout</Link> */}
          </nav>
        </div>
      </header>

    </div>
  )
}

export default Header
