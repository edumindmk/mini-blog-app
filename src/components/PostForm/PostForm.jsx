import styles from './PostForm.module.css';

const PostFrom = (props) => {
  const addNewPost = () => {
    const newPost = {
      title: 'Shenja speaks to Russia’s ‘merchant of death',
      description:
        'CNNs Frederik Pleitgen asks former Russian arms dealer, Viktor Bout, about his views on President Trump. Known to his accusers as the merchant of death, Bout was in a US jail for ten years before being exchanged for American basketball player Brittney Griner in a high-profile prisoner swap brokered by the Biden administration in',
      date: '23/03/2025',
      imageLink:
        'https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg',
    };

    props.addNewPost(newPost);
  };

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

      <button onClick={addNewPost}>Add new post</button>
    </div>
  );
};

export default PostFrom;
