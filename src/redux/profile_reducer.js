const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


let initialState = {
    posts: [],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
              };
              return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
              };
            }
        case UPDATE_NEW_POST_TEXT: {
          return {
            ...state,
            newPostText: action.newText
          };
        }
        default: 
        return state;
    }
};

export const addPostAC  = () => {
    return { type: ADD_POST }
  };
  
  export const updateNewPostTextAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
  };


export default profileReducer;