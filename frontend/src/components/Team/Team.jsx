import React from 'react';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import './Team.css'

const teamMembers = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    name: 'John Doe',
    role: 'Lead Developer',
    socialLinks: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    socialLinks: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    name: 'David Miller',
    role: 'Junior Developer',
    socialLinks: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
  },
];

const Team = () => {
  return (
    <div className='team'>
        <h1>Our Team</h1>
        <h2>Meet Our Experienced Team Members</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {teamMembers.map((member, index) => (
                <TeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                socialLinks={member.socialLinks}
                />
            ))}
        </div>
    </div>
  );
};

export default Team;
