import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {
  
  let postsElement = props.postsData.map(
    post => <Post message={post.message} likes={post.likes}/>
  )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let deletePost = () => {
    return alert('Post Deleted')
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={classes.block}>
      <div className={classes.profile}>
      <div><textarea onChange={onPostChange} ref={newPostElement} value={props.postText} /></div>
      <div><button onClick={addPost}>Add Post</button></div>
      <div><button onClick={deletePost}>Remove</button></div>
    </div>
      {postsElement}
    </div>
  );
}

export default MyPosts;