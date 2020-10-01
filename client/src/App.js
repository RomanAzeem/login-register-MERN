import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='auth-wrapper'>
            <div className='auth-inner'>
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
