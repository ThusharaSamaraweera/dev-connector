import React, {useState} from 'react'
import {Link, useNavigate}  from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { addExperiece } from '../../store/actions/profileAction';

const AddExperience = ({addExperiece}) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  })
  const navigate = useNavigate();
  const [toDateDisable, setToDataDisable] = useState(false);
  const { company, title, location, from ,to, current, description} = formData;
  
  const handleOnChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addExperiece(formData, navigate);
    navigate('/dashboard');
  }
  return ( 
    <div className='container'>
      <h1 className="large text-primary">
       Add An Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" >
        <div className="form-group">
          <input type="text" placeholder="* Job Title" name="title" required
            value={title}
            onChange={ (e) => handleOnChange(e)}
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Company" name="company" required 
            value={company}
            onChange={ (e) => handleOnChange(e)}
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" 
            value={location}
            onChange={ (e) => handleOnChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" 
            value={from}
            onChange={ (e) => handleOnChange(e)}
          />
        </div>
         <div className="form-group">
          <p>
            <input type="checkbox" name="current" 
              value={current}
              checked={current}
              onChange={ (e) => {
                setFormData({...formData, current: !current})
                setToDataDisable(!toDateDisable)
              }}  
            /> {' '} Current Job</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" 
            value={to}
            onChange={ (e) => handleOnChange(e)}
            disabled={toDateDisable ? 'disabled' : ''}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={ (e) => handleOnChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" 
          onClick={handleOnSubmit}
        />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </div>
  )
}

AddExperience.propTypes = {
  addExperiece: PropTypes.func.isRequired,
}

export default connect(null, {addExperiece})(AddExperience);
