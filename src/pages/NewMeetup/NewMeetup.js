import meetupsApi from '../../services/meetups-api/meetups-api';
import { useHistory } from 'react-router';
import NewMeetupForm from '../../components/Meetups/NewMeetupForm/NewMeetupForm';

const NewMeetup = () => {
    const history = useHistory();

    const addNewMeetupHandler = async (meetupData) => {
        try {
            await meetupsApi.submitNewMeetup(meetupData);
            history.replace("/meetups");
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm addNewMeetup={addNewMeetupHandler} />
        </section>
    );
};

export default NewMeetup;