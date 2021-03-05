import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

let postsElements = props.posts.map( post => <Post id ={post.id} message ={post.message} likesCount={post.likesCount}/>)

       let newPostElement = React.createRef(); 

       let onAddPost = () => {
           props.addPost();
        };

        let onPostChange = () => {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} name="" ref={newPostElement} cols="30" rows="5" value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add post!</button>
                </div>
                <div>
                    <button>Delete post!</button>
                </div>
            </div>
            <div className={styles.posts}>
               
                {postsElements}

            </div>
        </div>
    )
};

export default MyPosts;