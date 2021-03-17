import React from "react";
import MyPostsContainer from "../../containers/MyPostsContainer";
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <MyPostsContainer />
            </div>
        </div>

    )
};

export default Profile;