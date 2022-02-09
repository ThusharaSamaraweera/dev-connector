import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';

const Experience = (props) => {
  const {experience} = props;
  const experiences = experience.map(exp => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <th className='hide-sm'>{exp.title}</th>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - 
        {
          exp.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{exp.from}</Moment>)
        }
      </td>
      <th>
        <button className='btn btn-danger'>Delete</button>
      </th>
    </tr>
  ))
  return (
    <Fragment>
      <h2 className='my-2'>Experience credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {experiences}
        </tbody>
      </table>
    </Fragment>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
}

export default Experience
