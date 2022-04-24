import React, {Fragment, useEffect} from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner'
import { getProfiles } from '../../store/actions/profileAction';
import ProfileItem from  './ProfileItem';

const Profiles = ({
  getProfiles, profile: {profiles, loading}
}) => {

  useEffect(() => {
    getProfiles()

  }, [])

  return (
    <Fragment>
      { 
        loading ? 
          <Spinner/> :
          <Fragment>
            <div className='container'>
              <h2 className='large text-primary'>Developers</h2>
              <p className='lead'>
                <i className='fas fa-link'></i>{' '}
                Browse and connect with developers
              </p>
              <div className='profiles'>
                { profiles.length > 0 
                  ? (
                    profiles.map( profile => (
                      <ProfileItem 
                        key={profile._id}
                        profile={profile}
                      />
                    ))
                  ) : <h4>No profiles found ...</h4>
                }
              </div>
            </div>
          </Fragment>
      }
    </Fragment>
  )
}

Profiles.propTypes = {
  getProfiles: propTypes.func.isRequired,
  profile: propTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.ProfileReducer
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
