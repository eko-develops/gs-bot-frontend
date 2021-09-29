import { useState, useEffect } from 'react';

import styles from "../styles/UserList.module.css";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(  () => {
        fetch('http://localhost:3001/api/rolls')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setUsers(data.data);
        })
        .catch(err => console.log(err))
    }, []); //fire the useEffect only once on first render

    return (
        <div className={styles.userListWrapper}>
            <ul>
                {
                    // for every user, create a card
                   users ? users.map( (user) => (
                        <li key={user._id} className={styles.userCard}>
                            <h4>{user.username}</h4>
                            <p>id: {user._id}</p>
                            <p>total credits: {user.totalCredits}</p>
                            <p>joined: {user.createdAt}</p>
                            <p>last roll: {user.updatedAt}</p>
                        </li>
                    ))
                    :
                    <h2>Nothing in users..</h2>
                }
            </ul>
        </div>
        
    )
}

export default UserList
