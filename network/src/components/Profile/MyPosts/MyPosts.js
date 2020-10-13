import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
  
  let postsElement = props.postsData.map(
    post => <Post message={post.message} likes={post.likes}/>
  )

  return (
    <div className={classes.block}>
      <div className={classes.profile}>
      <div><textarea></textarea></div>
      <div><button>Add Post</button></div>
      <div><button>Remove</button></div>
    </div>
      {postsElement}
    </div>
  );
}

export default MyPosts;