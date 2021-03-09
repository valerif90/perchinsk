import React from 'react';
import styles from './Users.module.css';
import User from '../User/User';
import axios from 'axios';

let Users = (props) => {


    // [
    //     {id: '1', photoUrl: 'https://moto-manual.com/wp-content/uploads/2019/01/Honda-XR-250-Baja1-662x460.jpg', followed: true, fullName: 'Hi', status: '15', location: {city: 'ldskf', country: 'dklfsdl'}},
    //     {id: '2', photoUrl: '', followed: false, fullName: 'Hello', status: '20', location: {city: 'hgh', country: 'dklfsjjhjdl'}},
    //     {id: '3', photoUrl: '', followed: true, fullName: 'Yo', status: '25', location: {city: 'fgffrr', country: 'dklhjyyfsdl'}}
        
    //         ]
let createUser = () => {
    return (
        axios.post('http://localhost:4000/users', {
            "fullName": "SheenaShaw2",
            "photoUrl": "https://i.imgur.com/LeZjOt2.jpg"
        }
        )
    )
};

let deleteUser = (id) => {
    return (
        axios.delete(`http://localhost:4000/users/${id}`)
    )
}

    if (props.users.length === 0) {

        axios.get('http://localhost:4000/users').then(response => {
            props.setUsers(response.data.users);
        })

        let userDelete = () => {
            return (
                <div></div>
            )
        }
    
}

    return ( <div>
        {props.users.map(user => <div key={user.id}>
             <span>
             <button onClick={createUser}>dsfsdf</button>
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
                     <button onClick={deleteUser}>Delete User</button>
                 </span>
             </span>
        </div>)}
        </div>
    )
}

export default Users;
