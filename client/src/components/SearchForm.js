
import styles from '../styles/SearchForm.module.css';

const SearchForm = ({handleQuery, query}) => {
   
    return (
        <div className={styles.searchForm}>
            <h2>search for a user..</h2>
            <input value={query} onChange={(e) => handleQuery(e)} type="text"></input>
        </div>
    )
}

export default SearchForm
