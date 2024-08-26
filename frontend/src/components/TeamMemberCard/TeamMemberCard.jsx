import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './TeamMemberCard.css';

const TeamMemberCard = ({ image, name, role, socialLinks }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>
        <div className="social-icons">
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
