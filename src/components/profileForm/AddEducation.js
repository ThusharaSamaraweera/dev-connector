import React, {useState} from 'react'
import {Link, useNavigate}  from 'react-router-dom';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { addEducation } from '../../store/actions/profileAction';

const AddEducation = ({addEducation}) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  })
  const navigate = useNavigate();
  const [toDateDisable, setToDataDisable] = useState(false);
  const { school, degree, fieldOfStudy, from ,to, current, description} = formData;
  
  const handleOnChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, navigate);
    navigate('/dashboard');
  }
  return ( 
    <div className='container'>
      <h1 className="large text-primary">
       Add An Education
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or
          bootcamp that you have attended
      </p>
      <small>* = required field</small>
      <form className="form" >
        <div className="form-group">
          <input type="text" placeholder="* School or Bootcamp" name="school" required
            value={school}
            onChange={ (e) => handleOnChange(e)}
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* degree" name="degree" required 
            value={degree}
            onChange={ (e) => handleOnChange(e)}
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Field Of Study" name="fieldOfStudy" 
            value={fieldOfStudy}
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
            /> {' '} Current school</p>
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
            placeholder="Program Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, {addEducation})(AddEducation);
