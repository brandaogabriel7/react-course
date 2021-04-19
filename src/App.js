import { Route, Switch } from 'react-router';
import AllMeetups from './pages/AllMeetups/AllMeetups';
import Favorites from './pages/Favorites/Favorites';
import NewMeetup from './pages/NewMeetup/NewMeetup';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/meetups">
          <AllMeetups />
        </Route>
        <Route path="/meetups/new">
          <NewMeetup />
        </Route>
        <Route path="/meetups/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
