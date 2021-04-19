import Card from '../../UI/Card/Card';
import styles from './NewMeetupForm.module.css';

const NewMeetupForm = () => (
    <Card>
        <form className={styles.form}>
            <div className={styles.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" />
            </div>
            <div className={styles.control}>
                <label htmlFor="image">Meetup Title</label>
                <input type="url" required id="image" />
            </div>
            <div className={styles.control}>
                <label htmlFor="address">Meetup Title</label>
                <input type="text" required id="address" />
            </div>
            <div className={styles.control}>
                <label htmlFor="description">Meetup Title</label>
                <textarea id="description" required rows="5"></textarea>
            </div>
            <div className={styles.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
);

export default NewMeetupForm;