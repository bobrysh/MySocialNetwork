import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={classes.profileInfo}>
      <div >
        <img alt='' src='https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg'>
        </img>
      </div>
      <div>
        Avatar + descr
      </div>
    </div>
  );
}

export default ProfileInfo;