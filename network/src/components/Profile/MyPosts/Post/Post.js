import React from 'react';
import classes from './Post.module.css';
// import faker from 'faker'

const Posts = (props) => {
  return (
    <div className={classes}>
      <img alt='' src=''></img>
      {props.message}
      <br />
      likes:{props.likes}
    </div>

  );
}

export default Posts;
