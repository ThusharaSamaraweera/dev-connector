import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../store/actions/profileAction';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Experience from './Experience';

const Dashboard = ({ getCurrentProfile, 
  auth: {user}, 
  profile: { profile, loading } }) => {

  useEffect(() => {
    getCurrentProfile();

  }, [])

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

Dashboard.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  profile: state.ProfileReducer
});

export default connect(mapStateToProps, { getCurrentProfile })(
  Dashboard
);
