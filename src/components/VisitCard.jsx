import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import styles from './VisitCard.module.css';
import { profile, about, skills, projects, tabs } from '../data/profileData';

import Header from './header/Header';
import Tab from './tab/Tab';
import Panel from './panel/Panel';

function VisitCard() {
    const [activeId, setActiveId] = useState(() => {
      const saved = Number(Cookies.get('active-tab'));
      return tabs.some((t) => t.id === saved) ? saved : tabs[0].id;
    });

  useEffect(() => {
    Cookies.set('active-tab', activeId);
  }, [activeId]);

  return (
    <div className={styles.container}>
      <Header name={profile.name} initials={profile.initials} role={profile.role} />
      <Tab tabs={tabs} activeId={activeId} setActiveId={setActiveId}/>
      <Panel 
        key={activeId}
        activeId={activeId}
        about={about}
        skills={skills}
        projects={projects}
      />
    </div>
  )
}

export default VisitCard