import { useContext, useRef } from 'react';
import FavoritesContext from '../../../contexts/favorites-context';
import Card from '../../UI/Card/Card';
import styles from './MeetupItem.module.css';

const MeetupItem = ({ meetup: { id, title, image, address, description } }) => {
    const favoritesContext = useContext(FavoritesContext);

    const favoriteToggleButtonRef = useRef();

    const isFavorite = favoritesContext.isFavorite(id);

    const toggleFavoriteStatusHandler = () => {
        if (isFavorite) {
            favoritesContext.removeFavorite(id);
        }
        else {
            favoritesContext.addFavorite({ id, title, image, address, description });
        }
    };

    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={styles.actions}>
                    <button
                        onClick={toggleFavoriteStatusHandler}
                        ref={favoriteToggleButtonRef}>{
                            isFavorite
                                ? 'Unfavorite'
                                : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;