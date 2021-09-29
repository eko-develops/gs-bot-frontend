import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import styles from "../styles/UserList.module.css";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/rolls')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setUsers(data.data);
        })
        .catch(err => console.log(err))
    }, []); //fire the useEffect only once on first render

    const parseDate = (ISOdate) => {
        const date = parseISO(ISOdate);
        return format(date, 'PPpp');
    }

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
                            <p>first roll: {parseDate(user.createdAt)}</p>
                            <p>last roll: {parseDate(user.updatedAt)}</p>
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
