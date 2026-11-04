import styles from './VisitCard.module.css';
import { profile, about, skills, projects, tabs } from '../data/profileData';

import Header from './header/Header';
import Tab from './tab/Tab';

function VisitCard() {
    // const tabItems = tabs.map((tab) => ({ ...tab, content: panels[tab.id] }));

  return (
    <div className={styles.container}>
      <Header name={profile.name} initials={profile.initials} role={profile.role} />
      <Tab tabs={tabs}/>
    </div>
  )
}

export default VisitCard