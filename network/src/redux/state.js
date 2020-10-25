const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT'


let store = {
  getState(){
    return this._state;
  },

  _state : {
    profilePage:{      
      postsData : [{
        id:1,
        message: "Hi",
        likes: 0
      },
      {
        id:2,
        message: "My",
        likes: 1
      },
      {
        id:3,
        message: "Guy",
        likes: 2
      },
      {
        id:4,
        message: "Hello",
        likes: 3
      },
      {
        id:5,
        message: "Bonjour",
        likes: 4
      },
      {
        id:6,
        message: "!!!",
        likes: 5
      }],
      newPostText:"BLAH BLAH"
    },
    messagesPage:{
      messagesData:[    {
        id:1,
        message: "Hi"
      },
      {
        id:2,
        message: "My"
      },
      {
        id:3,
        message: "Guy"
      },
      {
        id:4,
        message: "Hello"
      },
      {
        id:5,
        message: "Bonjour"
      },
      {
        id:6,
        message: "!!!"
      }],
      dialogsData:[{
        id:1,
        name: "Pasha"
      },
      {
        id:2,
        name: "Lesha"
      },
      {
        id:3,
        name: "Hrusha"
      },
      {
        id:4,
        name: "Masha"
      },
      {
        id:5,
        name: "Glasha"
      },
      {
        id:6,
        name: "Grisha "
      }],
      newMessageBody:[]
    },
  },

  _callSubscriber() {
    console.log('State changed')
  },



  subscribe(observer)  {
    this._callSubscriber = observer
  },

  dispatch(action){ // обьект со свойством type "ADDPOST"
    if(action.type === ADD_POST){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0
      }
    
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }else if(action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }else if(action.type === SEND_NEW_MESSAGE_TEXT){
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = ''
      this._state.messagesPage.messagesData.push({id: 3, message:body})
      this._callSubscriber(this._state);
    }
  }
}







export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText:text
  }
}

export const sendMessageActionCreator = () => {
  return {
    type: SEND_NEW_MESSAGE_TEXT,
  }
}

export const updateMessageActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT, body: body,
  }
}






export default store;
window.store = store;