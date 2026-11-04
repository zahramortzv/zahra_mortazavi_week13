import styles from './Header.module.css';

function Header({name,initials,role}) {
  return (
    <div className={styles.container}>
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.title}>
            <p>{name}</p>
            <span>{role}</span>
        </div>
    </div>
  )
}

export default Header