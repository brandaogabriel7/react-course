import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/Layout/Layout';
import AllMeetups from './pages/AllMeetups/AllMeetups';
import Favorites from './pages/Favorites/Favorites';
import NewMeetup from './pages/NewMeetup/NewMeetup';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Redirect exact from="/" to="/meetups" />
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
    </Layout>
  );
};

export default App;
