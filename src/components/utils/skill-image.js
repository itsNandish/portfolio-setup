

import java from '../../assets/svg/skills/java.svg';
import csharp from '../../assets/svg/skills/csharp.svg';
import dotnet from '../../assets/svg/skills/dotnet.svg';
import dotnetcore from '../../assets/svg/skills/dotnetcore.svg';
import springboot from '../../assets/svg/skills/springboot.svg';
import react from '../../assets/svg/skills/react.svg';
import javascript from '../../assets/svg/skills/javascript.svg';
import html from '../../assets/svg/skills/html.svg';
import css from '../../assets/svg/skills/css.svg';
import mysql from '../../assets/svg/skills/mysql.svg';
import postgresql from '../../assets/svg/skills/postgresql.svg';
import git from '../../assets/svg/skills/git.svg';
import materialui from'../../assets/svg/skills/materialui.svg';
import vitejs from '../../assets/svg/skills/vitejs.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'java':
      return java;
    case 'c#':
      return csharp;
    case '.net core':
      return dotnetcore;
    case '.net':
      return dotnet;
    case 'spring boot':
      return springboot;
    case 'react':
      return react;
    case 'javascript':
      return javascript;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'vitejs':
      return vitejs;  
    default:
      break;
  }
}
