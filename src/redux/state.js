import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let store = {
  _state: {
    profilePage: {
        posts: [
          {id: '1', message: 'Hi', likesCount: '15'},
          {id: '2', message: 'Hello', likesCount: '20'},
          {id: '3', message: 'Yo', likesCount: '20'},
          {id: '4', message: 'Moove', likesCount: '20'}
          ],
          newPostText: ''
    },
    dialogsPage: {
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
      }
},
_callSubscriber() {
  console.log('state changed!')
},
getState() {
  return this._state;
},
subscribe (observer) {
  this._callSubscriber = observer;
},
dispatch(action) {

  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  this._callSubscriber(this._state);
  }
}



export default store;
window.store = store;