import Input from "../Input"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          sarkhanrahimlidev
        </div>

        <div className={styles.navbarSearch}>
          <Input/>
        </div>

        <div className={styles.navbarActions}>
          <div className={styles.iconWrapper}>
            <span className={styles.badge}>1</span>
          </div>
          <div className={styles.iconWrapper}>
            <span className={styles.badge}>7</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar