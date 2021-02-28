import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <button>Add post!</button>
                </div>
                <div>
                    <button>Delete post!</button>
                </div>
            </div>
            <div className={styles.posts}>
               <Post name = 'nastya' age = '17'/>
               <Post name = 'nastya22' age = '18'/>
               <Post name = 'nastya333' age = '19'/>
               <Post />
            </div>
        </div>
    )
};

export default MyPosts;