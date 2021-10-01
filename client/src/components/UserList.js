import { format, parseISO } from 'date-fns';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


import styles from "../styles/UserList.module.css";

const UserList = ({data: users, error, loading, query, setCount}) => {

    const [filteredUsers, setFilteredUsers] = useState([]);

    const parseDate = (ISOdate) => {
        const date = parseISO(ISOdate);
        return format(date, 'PPpp');
    }

    useEffect(() => {
        const filterUsers = users.filter( (user) => user.username.toLowerCase().includes(query) );
        setFilteredUsers(filterUsers);
        setCount(filterUsers.length);
    }, [users, query, setCount])

    return (
        <div className={styles.userListWrapper}>
            <ul>
                {loading && <h4 style={{textAlign: "center"}}>Loading...</h4>}
                {error && <h4 style={{textAlign: "center"}}>Error getting data... {error}</h4>}
                {
                    // for every user, create a card
                    filteredUsers ? filteredUsers.map( (user) => (
                        <li key={user._id} className={styles.userCard}>
                            <Link to={`/user/${user._id}`}><h4>{user.username}</h4></Link>
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
