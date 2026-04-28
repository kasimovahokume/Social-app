import PostItem from "../PostItem";
import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost }) => {
  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostItem 
          key={post.id} 
          post={post} 
          onDelete={onDeletePost} 
        />
      ))}
    </div>
  );
};
export default PostList;