import React, { useState, useEffect } from 'react';

function TeamMemberComparison() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/team-members');
      const data = await res.json();
      setTeamMembers(data);
    }
    fetchData();
  }, []);

  const skills = teamMembers.reduce((acc, teamMember) => {
    teamMember.skills.forEach(skill => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
    });
    return acc;
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {skills.map(skill => (
            <th key={skill}>{skill}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {teamMembers.map(teamMember => (
          <tr key={teamMember._id}>
            <td>{teamMember.name}</td>
            {skills.map(skill => (
              <td key={skill}>
                {teamMember.skills.includes(skill) ? 'Yes' : 'No'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TeamMemberComparison;
