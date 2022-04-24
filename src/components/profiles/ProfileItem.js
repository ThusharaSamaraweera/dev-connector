import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProfileItem = ({
  profile
}) => {
  const defaultPic = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FaP9Cm.png%3Fs%3D328%26g%3D1&f=1&nofb=1";

  return (
    <div className='profile bg-light'>
      <img src={profile.avatar ? profile.avatar : defaultPic} alt="" className="round-img"></img>
      <div>
        <h2>{profile.user.name}</h2>
        <p>
          {profile.status} 
          {
            profile.company &&
            <span>
              {" "} at {profile.company}
            </span>
          }
        </p>
        <p className='my-1'>
          {
            profile.location &&
            <span>
            {" "} at {profile.location}
            </span>
          }
        </p>

        {/*profile/${profile.user._id}*/}

        <Link to={`#`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <div>
        <ul>
          {profile.skills.slice(0, 4).map((skill, index) => (
            <li key={index} className='text-primary'>
              <i className='fas fa-check'></i>
              {' '}{skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem
