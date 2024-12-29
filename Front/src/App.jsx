import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import Home from './pages/Home';
import SignIn from './pages/Signin.jsx';
import UserProfile from './pages/UserProfile';
import PrivateRoute from './layout/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <PrivateRoute path="/profile" component={UserProfile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

