import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/alejandro-martinez-5113b8218/"
        target="_blank" rel="noreferrer noopener"><BsLinkedin/></a>
        <a href="https://github.com/alex148m"
        target="_blank" rel="noreferrer noopener"><FaGithub/></a>
    </div>
  );
};

export default HeaderSocials;
