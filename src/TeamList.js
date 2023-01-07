import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TeamList() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/team-members');
      const data = await res.json();
      setTeamMembers(data);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {teamMembers.map(teamMember => (
        <li key={teamMember._id}>
          <Link to={`/team-member/${teamMember._id}`}>{teamMember.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TeamList;
