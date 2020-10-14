let rerenderEntireTree = () => {
  console.log(' ')
}

let state ={
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
        name: "Grisha"
      }],
    },
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0
  }

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPost = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state;