import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileItem = ({
  profile
}) => {

  return (
    <div className='profile bg-light'>
      <img src={profile.avator} alt="" className="round-img"></img>
      <div>
        <h2>{profile.user.name}</h2>
        <p>
          {profile.status} 
          {
            profile.company &&
            <span>
              at {profile.company}
            </span>
          }
        </p>
        <p className='my-1'>
          {
            profile.location &&
            <span>
              at {profile.location}
            </span>
          }
        </p>
        <Link to={`/profile/${profile.user._id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem
