import styles from './PostItem.module.css';

const PostItem = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.imageLink} alt='news' />

      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <p>{props.date}</p>
    </div>
  );
};

export default PostItem;
