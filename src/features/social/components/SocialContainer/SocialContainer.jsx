import Navbar from "../../../../shared/components/Navbar"
import Sidebar from "../../../../shared/components/Sidebar/Sidebar"
import styles from "./SocialContainer.module.css"

const SocialContainer = (() => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <div className={styles.mainContent}>
          <Sidebar/>
          <main className={styles.feed}>
            <h2>Postlar burda olacaq</h2>
          </main>
        </div>
    </div>
  )
})


export default SocialContainer