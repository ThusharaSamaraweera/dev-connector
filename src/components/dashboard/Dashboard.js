import React, { Fragment, useEffect } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../store/actions/profileAction';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({
  getCurrentProfile, 
  auth: {user}, 
  profile: { profile, loading }  ,
  deleteAccount
}) => {

  useEffect(() => {
    getCurrentProfile();
  }, [])

  const handleOnDeleteAccount = () => {
    deleteAccount();
  }

  return (
    <div className='container'>
      {
        loading && profile === null ? <Spinner /> :
          <Fragment>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
              <i className="fas fa-user" /> Welcome {user && user.name}
            </p>

            {
              profile !== null ? (
                <Fragment>
                  <DashboardActions /> 
                  <Experience experience={profile.experience} />
                  <Education education={profile.education} />

                  <div className='my-2'>
                    <button className='btn btn-danger' 
                      onClick={() => handleOnDeleteAccount()}
                    >
                      <i className='fas fa-user'>{' '}Delete My Account</i>
                    </button>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <p>You have not yet setup a profile, please add some info</p>
                  <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create Profile
                  </Link>
                </Fragment>
              )
            }
          </Fragment>
      }
    </div>

  )
}

Dashboard.propTypes = {
  getCurrentProfile: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  profile: propTypes.object.isRequired,
  deleteAccount: propTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  profile: state.ProfileReducer
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
