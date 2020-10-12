import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={classes.profile}>
    <img alt='' src='https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg'>
    </img>
    <div>
      Avatar + descr
    </div>
    <div>
      Posts
    </div>
    <div>
      new Post
    </div>
    <MyPosts />
  </div>
  );
}

export default Profile;
