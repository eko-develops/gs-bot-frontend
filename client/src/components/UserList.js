import styles from "../styles/UserList.module.css";

const UserList = () => {
    return (
        <div className={styles.userListWrapper}>
            <ul className="user-list">
                <li className={styles.userCard}>
                    <h4>username</h4>
                    <p>id:</p>
                    <p>total credits:</p>
                    <p>joined:</p>
                    <p>last roll:</p>
                </li>
            </ul>
        </div>
        
    )
}

export default UserList
