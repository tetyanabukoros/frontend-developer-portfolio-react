import './skills.scss';

const skillsData = [
  { category: 'Web', skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'DOM'] },
  { category: 'Frameworks', skills: ['React', 'Angular', 'Gatsby', 'Bootstrap', 'Material-UI', 'Sass/SCSS'] },
  { category: 'Version Control', skills: ['Git', 'GitHub', 'Bitbucket'] },
  { category: 'APIs', skills: ['REST', 'GraphQL'] },
  { category: 'Design', skills: ['Responsive Design', 'Component-Based Architecture', 'SOLID', 'DRY'] },
  { category: 'Tools', skills: ['VS Code', 'Postman', 'Figma', 'Lighthouse', 'Jira'] },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h1>Skills</h1>
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div className="skills-card skeleton-card" key={index}>
              <h2>{group.category}</h2>
              <ul>
                {group.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
