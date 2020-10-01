import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/actions/userAction';

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <form onSubmit={onSubmit}>
      <h3>Login In</h3>
      <div className='form-group'>
        <label>Email address</label>
        <input
          type='email'
          className='form-control'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={onChange}
          required
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
          minLength='6'
        />
      </div>

      <div className='form-group'>
        <div className='custom-control custom-checkbox'>
          {/* <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck1'
          />
          <label className='custom-control-label' htmlFor='customCheck1'>
            Remember me
          </label> */}
        </div>
      </div>

      <input
        type='submit'
        className='btn btn-primary btn-block'
        value='Submit'
      />
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
