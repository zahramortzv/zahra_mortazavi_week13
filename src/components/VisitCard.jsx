import styles from './VisitCard.module.css';
import { profile, about, skills, projects } from '../data/profileData';

import Header from './header/Header';

function VisitCard() {
  return (
    <div className={styles.container}>
      <Header name={profile.name} initials={profile.initials} role={profile.role} />
    </div>
  )
}

export default VisitCard