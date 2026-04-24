import Input from "../Input";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>

        {/* LOGO */}
        <div className={styles.navbarLogo}>
          <span className={styles.logoAccent}>s</span>arkhanrahimlidev
        </div>

        {/* SEARCH */}
        <div className={styles.navbarSearch}>
          <Input />
        </div>

        {/* ACTIONS */}
        <div className={styles.navbarActions}>

          {/* Mail */}
          <button className={styles.actionBtn} aria-label="Messages">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className={styles.badge}>1</span>
          </button>

          {/* Bell */}
          <button className={styles.actionBtn} aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
            <span className={styles.badge}>7</span>
          </button>

          {/* Avatar */}
          <div className={styles.avatarWrapper}>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="profile"
              className={styles.avatar}
            />
            <span className={styles.onlineDot} />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;