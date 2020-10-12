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
    <Post message='hi' likes='1'/>
    <Post message='bye' likes='2'/>
    </div>
  );
}

export default MyPosts;