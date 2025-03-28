import React, { useState } from 'react';


const Details = () => {
  
  const [selectedSkill, setSelectedSkill] = useState(null);
 
  

  const handleBackClick = () => {
    setSelectedSkill(null);
  };

  

  

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#e0f7fa' }}>
      <h2 style={{ color: '#00796b', textAlign: 'center', borderBottom: '2px solid #004d40', paddingBottom: '10px' }}>Skill Mapping</h2>

      {!selectedSkill ? (
        <>
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#004d40' }}>Skills Documentation</h3>
            <p style={{ lineHeight: '1.6' }}>
              The first step in any successful Skill Mapping process is to document the skills required for specific roles or jobs. In the context of ISEN, this means identifying the skills that participants—both young and old—bring to the table. These skills could span various domains: technical, interpersonal, creative, or practical.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Imagine an older carpenter sharing their woodworking expertise with a young apprentice. The carpenter’s skills—precision measuring, joinery techniques, and safety protocols—become part of the documented skill set.
            </p>
          </section>

         

          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#004d40' }}>Identification of High-Demand Skills</h3>
            <p style={{ lineHeight: '1.6' }}>
              ISEN aims to bridge generational gaps while recognizing the changing landscape of work. So, we need to identify skills that are in demand—those that lead to high-wage, meaningful employment.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              For instance, if the project involves technology, skills like coding, data analysis, or digital literacy become crucial. On the other hand, soft skills like communication, adaptability, and teamwork are equally vital.
            </p>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#004d40' }}>Mapping Skills to Roles</h3>
            <p style={{ lineHeight: '1.6' }}>
              Picture a collaborative workshop where older adults and young learners sit together. They discuss their skills, interests, and aspirations. Then, they map these skills to specific roles or tasks.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Maybe an older participant has exceptional project management skills, while a teenager is a social media whiz. By mapping these skills, we create a mosaic of expertise.
            </p>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#004d40' }}>Learning Outcomes</h3>
            <p style={{ lineHeight: '1.6' }}>
              Intergenerational projects often unintentionally provide learning opportunities. But let’s make it intentional! Define clear learning outcomes for participants.
            </p>
            <ul style={{ lineHeight: '1.6' }}>
              <li><strong>Older Adults:</strong> Enhance digital literacy, learn about emerging technologies, or develop mentoring skills.</li>
              <li><strong>Youth:</strong> Gain insights into life experiences, practice active listening, or acquire practical skills (like gardening or cooking).</li>
            </ul>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#004d40' }}>Evaluation Mechanisms</h3>
            <p style={{ lineHeight: '1.6' }}>
              How do we know if our Skill Mapping efforts are effective? Regular evaluation is key. Consider surveys, feedback sessions, or even informal conversations. Are participants acquiring new skills? Are they applying them in real-world scenarios?
            </p>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#004d40' }}>Community Engagement</h3>
            <p style={{ lineHeight: '1.6' }}>
              Skill Mapping isn’t just about individual growth; it’s about community cohesion. Engage local businesses, schools, and organizations.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Perhaps a bakery needs help with social media marketing. Our tech-savvy teen steps in, guided by the wisdom of an older marketing professional.
            </p>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#004d40' }}>Recognition and Celebration</h3>
            <p style={{ lineHeight: '1.6' }}>
              Let’s celebrate achievements! Whether it’s a certificate, a community event, or a heartfelt thank-you, recognize participants’ contributions.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Because when generations learn together, it’s cause for applause.
            </p>
          </section>

          
        </>
      ) : (
        <section>
          <button
            onClick={handleBackClick}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#00796b',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '16px',
              marginBottom: '20px'
            }}
          >
            Back
          </button>
          <h3 style={{ color: '#004d40' }}>Selected Skill: {selectedSkill.fullname}</h3>
          <p style={{ lineHeight: '1.6' }}>Type: {selectedSkill.type}</p>
          <p style={{ lineHeight: '1.6' }}>Description: {selectedSkill.description}</p>
          <p style={{ lineHeight: '1.6' }}>Phone Number: {selectedSkill.number}</p>
          <p style={{ lineHeight: '1.6' }}>Rating: {selectedSkill.rating}</p>
          
        </section>
      )}
    </div>
  );
};
export default Details;
