import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header>
            <span className={styles.brand}><span className={styles.bolded}>GS BOT</span> Dashboard</span>
            <nav>
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
