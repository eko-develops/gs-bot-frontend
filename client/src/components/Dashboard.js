import SearchForm from './SearchForm';
import UserList from './UserList';
import useFetch from '../hooks/useFetch';

import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {

    const { data, error, loading } = useFetch('http://localhost:3001/api/rolls');

    return (
        <main>
            <div className={styles.content}>
                <SearchForm data={data} />
                <UserList data={data} error={error} loading={loading} />
            </div>
        </main>
    )
}

export default Dashboard
