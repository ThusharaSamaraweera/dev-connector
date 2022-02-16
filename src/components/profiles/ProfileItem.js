import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ProfileItem = ({profile}) => {
  return (
    <div>
      {profile.user.name}
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {})(ProfileItem);
