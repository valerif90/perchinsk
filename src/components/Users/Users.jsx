import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';

let Users = (props) => {

// let deleteUser = (id) => {
//     return (
//         axios.delete(`http://localhost:4000/users/${id}`)
//     )
// }

    if (props.users.length === 0) {
        axios.get('http://localhost:4000/users').then(response => {
            props.setUsers(response.data.users);
        })
}

    return ( <div>
        {props.users.map(user => <div key={user.id}>
             <span>
                 <div>
                     <img className={styles.avatar} src={user.photoUrl} alt=""/>
                 </div>
                 <div>
                     {user.followed 
                     ? <button onClick={() => {props.unfollow(user.id)}}>unfollow</button> 
                     : <button onClick={() => {props.follow(user.id)}}>follow</button>}
                    </div>
             </span>
             <span>
                 <span>
                     <div>{user.fullName}</div>
                     {/* <button onClick={deleteUser}>Delete User</button> */}
                 </span>
             </span>
        </div>)}
        </div>
    )
}

export default Users;
