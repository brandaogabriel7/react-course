import styles from './Layout.module.css';
import MainNavigation from './MainNavigation/MainNavigation';

const Layout = ({ children }) => (
    <div>
        <MainNavigation />
        <main className={styles.main}>{children}</main>
    </div>
);

export default Layout;