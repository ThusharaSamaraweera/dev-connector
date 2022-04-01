import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../store/actions/profileAction';

const Education = (props) => {
  const {education, deleteEducation} = props;
  const handleOnDelete = (id) => {
    deleteEducation(id)
  }

  const educations = education?.map(edu => ( 
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
        <button className='btn btn-danger'
          onClick={ () => handleOnDelete(edu._id)}
        >Delete</button>
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
  deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation})(Education)
