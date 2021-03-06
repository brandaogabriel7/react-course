import { useEffect, useState } from 'react';
import MeetupList from '../../components/Meetups/MeetupList/MeetupList';
import meetupsApi from '../../services/meetups-api/meetups-api';

const AllMeetups = () => {
    const [meetups, setMeetups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        meetupsApi.getMeetups()
            .then(res => {
                const meetupsArray = Object.keys(res.data).map(id => ({ id, ...res.data[id] }));
                setMeetups(meetupsArray);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }, []);


    return (<div>
        <h1>All Meetups</h1>
        {
            !isLoading
                ? <MeetupList meetups={meetups} />
                : <section><p>Loading...</p></section>
        }
    </div>);
};

export default AllMeetups;