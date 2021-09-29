import { format, parseISO } from 'date-fns';
import useFetch from '../hooks/useFetch';

import styles from "../styles/UserList.module.css";

const UserList = () => {

    const { data: users } = useFetch('http://localhost:3001/api/rolls');

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
