import styles from './Panel.module.css';
import { AboutPanel,SkillsPanel,ProjectsPanel } from './Contents';

function Panel({ activeId, about, skills, projects }) {
        let content;
      switch (activeId) {
        case 0:
        content = <AboutPanel text={about.text} stats={about.stats} />;
        break;
        case 1:
        content = <SkillsPanel skills={skills} />;
        break;
        case 2:
        content = <ProjectsPanel projects={projects} />;
        break;
        default:
        content = null;
    }
  return (
    <div className={styles.container}>
        {content}
    </div>
  )
}

export default Panel