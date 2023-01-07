import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TeamMemberDetail() {
  const { id } = useParams();
  const [teamMember, setTeamMember] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3000/team-members/${id}`);
      const data = await res.json();
      setTeamMember(data);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>{teamMember.name}</h1>
      <p>Role: {teamMember.role}</p>
      <h2>Skills</h2>
      <ul>
        {teamMember.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMemberDetail;
