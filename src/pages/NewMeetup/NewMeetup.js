import axios from 'axios';
import { useHistory } from 'react-router';
import NewMeetupForm from '../../components/Meetups/NewMeetupForm/NewMeetupForm';

const MEETUPS_API_BASE_URL = 'https://meetups-react-app-default-rtdb.firebaseio.com/';

const NewMeetup = () => {
    const history = useHistory();

    const addNewMeetupHandler = (meetupData) => {
        axios.post(`${MEETUPS_API_BASE_URL}/meetups.json`, meetupData)
            .then(_ => {
                history.replace("/meetups");
            })
            .catch(err => console.error(err));
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm addNewMeetup={addNewMeetupHandler} />
        </section>
    );
};

export default NewMeetup;