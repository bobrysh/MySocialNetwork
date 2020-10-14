import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import {addPost , updateNewPost} from './redux/state'
import {BrowserRouter} from 'react-router-dom'


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </BrowserRouter>, document.getElementById('root')
    ); 
}

rerenderEntireTree(state);

