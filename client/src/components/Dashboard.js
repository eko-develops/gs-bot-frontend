import SearchForm from './SearchForm';
import UserList from './UserList';
import useFetch from '../hooks/useFetch';
import {useState} from 'react'

import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {

    const { data, error, loading } = useFetch('http://localhost:3001/api/rolls');

    const [query, setQuery] = useState("");
    const [count, setCount] = useState(0);

    const handleQuery = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value);
    }

    return (
        <main>
            <div className={styles.content}>
                <SearchForm handleQuery={handleQuery} query={query} />
                <p style={{textAlign: 'center'}}>Results: {count}</p>
                <UserList data={data} error={error} loading={loading} query={query} setCount={setCount}/>
            </div>
        </main>
    )
}

export default Dashboard
