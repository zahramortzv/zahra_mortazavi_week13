import styles from './Panel.module.css';

function AboutPanel({ text }) {
  return (
    <div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

function SkillsPanel({ skills }) {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.skill}>
          <div className={styles.skillTop}>
            <span>{skill.name}</span>
            <small>{skill.level}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsPanel({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className={styles.project}>
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
          <span className={`${styles.tag} ${styles[project.status]}`}>
            {project.status === 'done' ? 'Done' : 'In progress'}
          </span>
        </div>
      ))}
    </div>
  );
}

export {AboutPanel,SkillsPanel,ProjectsPanel}