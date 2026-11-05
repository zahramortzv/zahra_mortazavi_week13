import styles from './Tab.module.css';

function Tabs({ tabs,activeId,setActiveId }) {
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