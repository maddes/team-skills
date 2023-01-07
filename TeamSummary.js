import React, { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';

function TeamSummary() {
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

  const data = {
    labels: skills,
    datasets: teamMembers.map(teamMember => ({
      label: teamMember.name,
      data: skills.map(skill => (teamMember.skills.includes(skill) ? 1 : 0))
    }))
  };

  return <Radar data={data} />;
}

export default TeamSummary;
