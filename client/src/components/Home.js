import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({ user, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }
  return (
    <div>
      <h3>Welcome {user.name}</h3>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
