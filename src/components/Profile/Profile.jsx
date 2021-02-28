import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
        <div className={styles.content}>Profile
            <ProfileInfo />
            <div>
                <MyPosts />
            </div>
        </div>

    )
};

export default Profile