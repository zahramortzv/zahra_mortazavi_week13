import { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import styles from './Tab.module.css';

function Tabs({ tabs }) {
  const activeTab = Cookies.get("active-tab");
  const [activeId, setActiveId] = useState(+activeTab || tabs[0].id);
  const active = tabs.find((t) => t.id === activeId);

  useEffect(()=>{
    Cookies.set("active-tab", activeId);
  },[activeId])


  return (
    <div>
      <div className={styles.navbar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${tab.id === activeId ? styles.active : ''}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;