const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT'

const messagesReducer = (state,action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        case SEND_NEW_MESSAGE_TEXT:
            return state;
        default:
            return state;
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
  
  
export default messagesReducer;