const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: 'Nastya'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Sveta'}
      ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'what is your name'}
      ],
    newMessageBody: ''
  };

const dialogsReducer = (state = initialState, action) => {
        switch(action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                return state;
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                state.newMessageBody = '';
                state.messages.push({id: 4, message: body});
                return state;
            default: 
            return state;
        }
};

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
  };
  
  export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, 
        body: body
    }
  };


export default dialogsReducer;