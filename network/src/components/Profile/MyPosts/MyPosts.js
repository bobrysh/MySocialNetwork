import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <div className={classes.profile}>
      <textarea></textarea>
      <button>Add Post</button>
      <button>Remove</button>
    </div>
    <Post />
    <Post />
    <Post />
    <Post />
    </div>
  );
}

export default MyPosts;
