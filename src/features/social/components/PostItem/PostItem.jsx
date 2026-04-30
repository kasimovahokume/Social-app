import styles from "./PostItem.module.css";
import PropTypes from "prop-types";

const PostItem = ({ post, onDelete }) => {
  const radioName = `feedback-${post.id}`; 

  return (
    <div className={styles.postCard}>
      {/* HEADER */}
      <div className={styles.header}>
        <img
          src={`https://i.pravatar.cc/150?u=${post.userId || post.id}`}
          className={styles.avatar}
          alt="user"
        />
        <div className={styles.userInfo}>
          <h4>{post.userName ? post.userName : (post.fullName ? post.fullName : "Anonim")}</h4>
          <span>{post.date || "Az əvvəl"}</span>
        </div>
        <button className={styles.deleteBtn} onClick={() => onDelete(post.id)}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <p>{post.content || post.text}</p>
        {post.image && (
          <img src={post.image} className={styles.postImg} alt="post" />
        )}
      </div>

      
      <div className={styles.actions}>
        <div className={styles.likeUnlikeRadio}>

          {/* LIKE */}
          <div>
            <input
              id={`like-${post.id}`}
              name={radioName}
              value="like"
              className={styles.customRadioFb}
              type="radio"
            />
            <label htmlFor={`like-${post.id}`} className={styles.feedbackLabel}>
              <svg className={styles.icon} width="22" height="22" viewBox="0 0 27 27"
                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M0.7229 26.5H5.92292V10.9008H0.7229V26.5ZM26.6299 15.2618L24.372 23.7566C23.9989 25.3696 22.5621 26.5 20.9072 26.5H8.52293V10.9278L10.7573 2.87293C10.9669 1.50799 12.1418 0.5 13.524 0.5C15.0699 0.5 16.323 1.7527 16.323 3.29837V10.8998H23.1651C25.4519 10.9009 27.1453 13.0335 26.6299 15.2618Z"
                  fill="currentColor"/>
              </svg>
              Like
            </label>
          </div>

          {/* UNLIKE */}
          <div>
            <input
              id={`unlike-${post.id}`}
              name={radioName}
              value="unlike"
              className={styles.customRadioFb}
              type="radio"
            />
            <label htmlFor={`unlike-${post.id}`} className={styles.feedbackLabel}>
              <svg className={styles.icon} width="22" height="22" viewBox="0 0 27 27"
                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M26.7229 0.5L21.5229 0.5L21.5229 16.0992L26.7229 16.0992L26.7229 0.5ZM0.815853 11.7382L3.07376 3.24339C3.44687 1.63037 4.88372 0.500027 6.53861 0.500027L18.9229 0.500028L18.9229 16.0722L16.6885 24.1271C16.4789 25.492 15.304 26.5 13.9218 26.5C12.3759 26.5 11.1228 25.2473 11.1228 23.7016L11.1228 16.1002L4.28068 16.1002C1.99391 16.0991 0.300502 13.9664 0.815853 11.7382Z"
                  fill="currentColor"/>
              </svg>
              Unlike
            </label>
          </div>

          {/* COMMENT */}
          <button className={styles.commentBtn}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 6.5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h11l4 4V6.5z"/>
            </svg>
            Comment
          </button>

        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default PostItem;