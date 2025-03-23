import styles from './PostForm.module.css';

const PostFrom = () => {
  return (
    <div className={styles.container}>
      <h1>Add New Post Form</h1>
      <form>
        <div className={styles.inputContainer}>
          <label>Title</label>
          <input type='text' />
        </div>

        <div className={styles.inputContainer}>
          <label>Description</label>
          <textarea type='text' />
        </div>

        <div className={styles.inputContainer}>
          <label>Date</label>
          <input type='text' />
        </div>

        <div className={styles.inputContainer}>
          <label>Image link</label>
          <input type='text' />
        </div>
      </form>

      <button>Add new post</button>
    </div>
  );
};

export default PostFrom;
