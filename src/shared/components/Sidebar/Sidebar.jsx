import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>Homepeage</li>
            <li className={styles.menuItem}>Pages</li>
            <li className={styles.menuItem}>Groups</li>
            <li className={styles.menuItem}>Marketplace</li>
            <li className={styles.menuItem}>Friends</li>
            <li className={styles.menuItem}>Settings</li>
            <li className={styles.menuItem}>Profile</li>
        </ul>
    </aside>
  )
}

export default Sidebar