import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
        <div className={styles.content}>Profile
            <ProfileInfo />
            <div>
                <MyPostsContainer />
            </div>
        </div>

    )
};

export default Profile;