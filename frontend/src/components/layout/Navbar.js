import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
  en: {
    login: 'Login',
    register: 'Register',
  },
  it: {
    login: 'Accesso',
    register: 'Registrati',
  },
});

const Navbar = ({ user }) => {
  const [language, setLanguage] = useState('en');
  const handleLanguageChange = (e) => {
    e.preventDefault();
    let lang = e.target.value;
    setLanguage(lang);
  };

  useEffect(() => {
    strings.setLanguage(language);
  }, [language]);

  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <h4 className='navbar-brand'>{user.name}</h4>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={'/login'}>
                  {strings.login}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/register'}>
                  {strings.register}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          Change Language:{' '}
          <select onChange={handleLanguageChange}>
            <option value='it'>It- Italian</option>
            <option value='en'>En- English</option>
          </select>
          <br />
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
