import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';

const Education = (props) => {
  const {education} = props;
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <th className='hide-sm'>{edu.degree}</th>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - 
        {
          edu.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{edu.from}</Moment>)
        }
      </td>
      <th>
        <button className='btn btn-danger'>Delete</button>
      </th>
    </tr>
  ))
  return (
    <Fragment>
      <h2 className='my-2'>Education credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {educations}
        </tbody>
      </table>
    </Fragment>
  )
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
}

export default Education
