import MeetupItem from '../MeetupItem/MeetupItem';
import styles from './MeetupList.module.css';

const MeetupList = ({ meetups }) => (
    <ul className={styles.list}>
        {meetups.map((meetup) => <MeetupItem key={meetup.id} meetup={meetup} />)}
    </ul>
);

export default MeetupList;