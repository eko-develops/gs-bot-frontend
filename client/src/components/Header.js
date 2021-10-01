import { Link } from 'react-router-dom';

import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header>
            <span className={styles.brand}><span className={styles.bolded}>GS BOT</span> Dashboard</span>
            <nav>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/userCard"> SingleUser </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
