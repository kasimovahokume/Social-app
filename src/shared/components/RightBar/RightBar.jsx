import styles from "./RightBar.module.css";

const RightBar = () => {
  return (
    <div className={styles.rightbar}>

      <div className={styles.section}>
        <h4 className={styles.title}>Online Friends</h4>
        <div className={styles.friendList}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={styles.avatarWrapper}>
              <img 
                src={`https://i.pravatar.cc/150?u=${i}`} 
                className={styles.avatar} 
                alt="friend" 
              />
              <span className={styles.onlineBadge}></span>
            </div>
          ))}
          <div className={styles.moreFriends}>+3</div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>Latest Photos</h4>
        <div className={styles.photoFlex}>
          <img src="https://picsum.photos/200/200?random=1" alt="post" />
          <img src="https://picsum.photos/200/200?random=2" alt="post" />
          <img src="https://picsum.photos/200/200?random=3" alt="post" />
          <img src="https://picsum.photos/200/200?random=4" alt="post" />
        </div>
      </div>
    </div>
  );
};

export default RightBar;