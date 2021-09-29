import SearchForm from './SearchForm';
import UserList from './UserList';

import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
    return (
        <main>
            <div className={styles.content}>
                <SearchForm />
                
                <UserList />
            </div>
        </main>
    )
}

export default Dashboard
