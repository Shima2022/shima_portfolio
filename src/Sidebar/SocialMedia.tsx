import React from 'react'
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';

export const SocialMedia: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '30px 0',
        gap: '20px',
      }}>
      <a href="https://www.linkedin.com/in/shima-h/"><ImLinkedin color="#FFDDE2FF" size={20} /></a>
      <a href="https://github.com/Shima2022"><FaGithub color="#FFDDE2FF" size={22} /></a>
    </div>
  );
};
