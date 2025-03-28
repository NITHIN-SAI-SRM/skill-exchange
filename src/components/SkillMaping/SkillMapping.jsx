import React, { useState } from 'react';

const SkillMapping = () => {
  const [employees] = useState([
    { id: 1, fullname: '  Teja', type: 'Web Development', description: 'Expert in React and Node.js', number: '9876543210', rating: 4.5 },
    { id: 2, fullname: 'Nithin', type: 'Graphic Design', description: 'Specialist in Photoshop and Illustrator', number: '9123456789', rating: 4.8 },
    { id: 3, fullname: 'Avinash', type: 'Digital Marketing', description: 'SEO and PPC expert', number: '9087654321', rating: 4.2 },
    { id: 4, fullname: 'Sai', type: 'Data Analysis', description: 'Proficient in Python and Power BI', number: '9876541230', rating: 4.7 },
    { id: 5, fullname: 'Koushik', type: 'Public Speaking', description: 'Certified trainer for corporate communication', number: '9234567890', rating: 4.6 },
    { id: 6, fullname: 'Ganesh', type: 'Cooking', description: 'Specialized in Italian and Indian cuisine', number: '9786543210', rating: 4.9 },
  ]);

  const [error] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([...employees]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleBackClick = () => {
    setSelectedSkill(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setFilteredSkills(
      employees.filter(employee => 
        employee.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#e0f7fa' }}>
      <h2 style={{ color: '#00796b', textAlign: 'center', borderBottom: '2px solid #004d40', paddingBottom: '10px' }}>Skill Mapping</h2>
      {!selectedSkill ? (
        <>
          <section style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Search by skill type"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #00796b',
                  fontSize: '16px'
                }}
              />
              <button
                onClick={handleSearchClick}
                style={{
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: '#00796b',
                  color: '#ffffff',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginLeft: '10px'
                }}
              >
                Search
              </button>
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilteredSkills([...employees]);
              }}
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
              Clear Search
            </button>
            <h3 style={{ color: '#004d40' }}>Documented Skills</h3>
            {error && <p>Error: {error.message}</p>}
            {filteredSkills.length > 0 ? (
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {filteredSkills.map((employee) => (
                  <li key={employee.id} style={{
                    marginBottom: '10px',
                    padding: '10px',
                    border: '1px solid #00796b',
                    borderRadius: '8px',
                    transition: 'transform 0.3s, background-color 0.3s',
                    cursor: 'pointer',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                  onClick={() => handleSkillClick(employee)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#b2dfdb';
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <div>
                      <h4 style={{ margin: '0 0 5px', color: '#00796b' }}>{employee.fullname}</h4>
                      <p style={{ margin: 0 }}>{employee.type}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No skills found.</p>
            )}
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

export default SkillMapping;
