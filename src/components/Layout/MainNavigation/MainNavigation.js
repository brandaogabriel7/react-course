import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => (
    <header className={styles.header}>
        <div className={styles.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><NavLink exact activeClassName={styles.active} to="/meetups">All meetups</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/meetups/new">New meetup</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/meetups/favorites">Favorite meetups</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default MainNavigation;