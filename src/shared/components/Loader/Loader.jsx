
import styles from "./Loader.module.css";

const Loader = () => {

  const spheres = Array.from({ length: 9 });
  const items = Array.from({ length: 9 });

  return (
    <section className={styles.container}>
      <section className={styles.loader}>
        {spheres.map((_, sIndex) => (
          <article 
            key={sIndex} 
            style={{ "--rot": sIndex }} 
            className={`${styles.sphere} ${styles[`sphere${sIndex + 1}`]}`}
          >
            {items.map((_, iIndex) => (
              <div 
                key={iIndex} 
                className={styles.item} 
                style={{ "--rot-y": iIndex + 1 }}
              ></div>
            ))}
          </article>
        ))}
      </section>
    </section>
  );
};

export default Loader;