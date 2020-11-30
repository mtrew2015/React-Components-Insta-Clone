/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';

const App = () => {
    const [posts, setPosts] = useState(dummyData);
    const [searchTerm, setSearchTerm] = useState(''); 

  const likePost = postId => {
      let newPosts = posts.map(post => {
          if(postId === post.id){
            return {...post, likes: post.likes + 1}
          }
          return post;
      })
      setPosts(newPosts);
  };

  return (
    <div className='App'>
        <SearchBar/>
        <Posts likePost={likePost} posts={posts}/>
    </div>
  );
};

export default App;
