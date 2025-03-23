import PostItem from '../PostItem/PostItem';

import styles from './PostList.module.css';

const PostList = (props) => {
  console.log('props.blogs', props.blogs);
  return (
    <div className={styles.cardList}>
      {props.blogs.map((blog) => (
        <PostItem
          title={blog.title}
          description={blog.description}
          imageLink={blog.imageLink}
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default PostList;
