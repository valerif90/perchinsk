import { connect } from "react-redux";
import {addPostAC, updateNewPostTextAC} from '../redux/profile_reducer';
import MyPosts from "../components/Profile/MyPosts/MyPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

