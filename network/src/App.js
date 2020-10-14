import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'


const App = (props) => {
  
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={()=> <Profile postsData={props.state.profilePage.postsData} addPost={props.addPost} updateNewPost={props.updateNewPost} postText={props.state.profilePage.newPostText}/>} />
        <Route path='/dialogs' render={()=> <Dialogs dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData}/>} />
        <Route path='/news' render={()=> <News />} />
        <Route path='/music' render={()=> <Music />} />
        <Route path='/settings' render={()=> <Settings />} />
      </div>
    </div>
  );
}

export default App;
