import { useContext } from 'react';
import MeetupList from '../../components/Meetups/MeetupList/MeetupList';
import FavoritesContext from '../../contexts/favorites-context';

const Favorites = () => {
    const favoritesContext = useContext(FavoritesContext);

    return (
        <section>
            <h1>My Favorites</h1>
            {
                favoritesContext.total > 0
                    ? <MeetupList meetups={favoritesContext.favorites} />
                    : <p>You got no favorites yet. Start adding some?</p>
            }
        </section>
    );
};

export default Favorites;