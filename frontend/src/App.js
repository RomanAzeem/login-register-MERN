import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import Login from './components/users/Login';
import Register from './components/users/Register';
import NotFound from './components/common/NotFound';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Alert />
              <Switch>
                <Route exact path='/register' component={Register}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/' component={Home}></Route>
                <Route path='*' component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
