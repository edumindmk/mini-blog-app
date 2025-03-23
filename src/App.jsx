import { useState } from 'react';

import './App.css';
import PostFrom from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';

function App() {
  const [blogs, setBlogs] = useState([
    {
      title: 'CNN speaks to Russia’s ‘merchant of death',
      description:
        'CNNs Frederik Pleitgen asks former Russian arms dealer, Viktor Bout, about his views on President Trump. Known to his accusers as the merchant of death, Bout was in a US jail for ten years before being exchanged for American basketball player Brittney Griner in a high-profile prisoner swap brokered by the Biden administration in',
      date: '23/03/2025',
      imageLink:
        'https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=',
    },
    {
      title: 'BBC speaks to Russia’s ‘merchant of death',
      description:
        'CNNs Frederik Pleitgen asks former Russian arms dealer, Viktor Bout, about his views on President Trump. Known to his accusers as the merchant of death, Bout was in a US jail for ten years before being exchanged for American basketball player Brittney Griner in a high-profile prisoner swap brokered by the Biden administration in',
      date: '23/03/2025',
      imageLink:
        'https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg',
    },
    {
      title: 'TV21 speaks to Russia’s ‘merchant of death',
      description:
        'CNNs Frederik Pleitgen asks former Russian arms dealer, Viktor Bout, about his views on President Trump. Known to his accusers as the merchant of death, Bout was in a US jail for ten years before being exchanged for American basketball player Brittney Griner in a high-profile prisoner swap brokered by the Biden administration in',
      date: '23/03/2025',
      imageLink:
        'https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg',
    },
  ]);

  const addNewPost = (newPost) => {
    setBlogs([...blogs, newPost]);
  };

  return (
    <>
      <PostFrom addNewPost={addNewPost} />
      <PostList blogs={blogs} />
    </>
  );
}

export default App;
