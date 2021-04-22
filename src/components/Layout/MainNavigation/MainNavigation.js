import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import FavoritesContext from '../../../contexts/favorites-context';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    const favoritesContext = useContext(FavoritesContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><NavLink exact activeClassName={styles.active} to="/meetups">All meetups</NavLink></li>
                    <li><NavLink activeClassName={styles.active} to="/meetups/new">New meetup</NavLink></li>
                    <li>
                        <NavLink activeClassName={styles.active} to="/meetups/favorites">
                            Favorite meetups
                        <span className={styles.badge}>{favoritesContext.total}</span>
                        </NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;