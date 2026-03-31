import { SkillsOrbit } from '../assets/components/SkillsOrbit'
import iconHtml from '../assets/html-icon.svg'
import iconCss from '../assets/css-icon.svg'
import iconJs from '../assets/javascript-programming-language-icon.svg'
import iconReact from '../assets/react-js-icon.svg'
import iconGit from '../assets/git-icon.svg'
import iconFigma from '../assets/figma-icon.svg'
import iconNode from '../assets/node-js-icon.svg'
import iconGithub from '../assets/github-icon.svg'
import iconPhotoshop from '../assets/adobe-photoshop-icon.svg'
import iconIllustrator from '../assets/adobe-illustrator-icon.svg'
import iconExpress from '../assets/express-js-icon.svg'
import iconVisualStudio from '../assets/visual-studio-code-icon.svg'

const skills = [
  { name: 'HTML',        icon: iconHtml },
  { name: 'CSS',         icon: iconCss },
  { name: 'JavaScript',  icon: iconJs },
  { name: 'React',       icon: iconReact },
  { name: 'Node.js',     icon: iconNode },
  { name: 'Git',         icon: iconGit },
  { name: 'GitHub',      icon: iconGithub },
  { name: 'Figma',       icon: iconFigma },
  { name: 'Photoshop',   icon: iconPhotoshop },
  { name: 'Illustrator', icon: iconIllustrator },
  { name: 'VS Code',     icon: iconVisualStudio },
  { name: 'Express.js',  icon: iconExpress },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">
        Mes <span className="accent">Compétences</span>
      </h2>
      <SkillsOrbit skills={skills} />
    </section>
  )
}