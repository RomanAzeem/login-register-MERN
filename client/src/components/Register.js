import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../redux/actions/userAction';

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match');
      //setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h3>Register</h3>

        <div className='form-group'>
          <label>Full Name</label>{' '}
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
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
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <button type='submit' className='btn btn-primary btn-block'>
          Sign Up
        </button>
        <p className='forgot-password text-right'>
          Already registered <Link to={'/login'}>Login?</Link>
        </p>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};
const mapStateToProps = () => ({});
export default connect(mapStateToProps, { register })(Register);
