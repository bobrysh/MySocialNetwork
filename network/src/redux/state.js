import profileReducer from "./profileReducer"
import messagesReducer from "./messagesReducer"
import sidebarReducer from "./sidebarReducer"

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
    sidebarPage:{}
  },

  _callSubscriber() {
    console.log('State changed')
  },



  subscribe(observer)  {
    this._callSubscriber = observer
  },

  dispatch(action){ // обьект со свойством type "ADDPOST"
    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage,action)
    this._state.sidebarPagePage = sidebarReducer(this._state.sidebarPagePage,action)

    this._callSubscriber(this._state);

  }
}

export default store;
window.store = store;