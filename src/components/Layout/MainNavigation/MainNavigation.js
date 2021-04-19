const { NavLink } = require('react-router-dom');

const MainNavigation = () => (
    <header>
        <h2>React Meetups</h2>
        <nav>
            <ul>
                <li><NavLink to="/meetups">All meetups</NavLink></li>
                <li><NavLink to="/meetups/new">New meetup</NavLink></li>
                <li><NavLink to="/meetups/favorites">Favorite meetups</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default MainNavigation;