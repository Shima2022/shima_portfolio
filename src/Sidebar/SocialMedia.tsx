import React from 'react'
import { ImLinkedin } from 'react-icons/im';
import { FaGithub, FaUnity } from 'react-icons/fa';

export const SocialMedia: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '30px 0',
        gap: '20px',
      }}>
      <a href="https://www.linkedin.com/in/shimaheidari/" target="_blank" rel="noreferrer"><ImLinkedin color="#bbbbbb" size={20} /></a>
      <a href="https://github.com/Shima2022" target="_blank" rel="noreferrer"><FaGithub color="#bbbbbb" size={22} /></a>
      <a href="https://play.unity.com/u/Shima2022" target="_blank" rel="noreferrer"><FaUnity color="#bbbbbb" size={22} /></a>
    </div>
  );
};
