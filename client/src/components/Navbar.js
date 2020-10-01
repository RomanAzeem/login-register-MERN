import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ user }) => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <h4 className='navbar-brand'>{user.name}</h4>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={'/login'}>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/register'}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Navbar);
