import React, { Component } from 'react';
import {reduxForm, Field, focus} from 'redux-form';
//import './ComplaintForm.css';
import Input from './Input';
import {required, nonEmpty, email} from '../validator';

export class ComplaintForm extends React.Component {
  // onSubmit(values) {
  //   return fetch();
  
  render() {
    return (
      <div>
        <h2> Report a problem with your delivery </h2>
        <form>
          <Field 
            name="trackingNumber"
            type="text"
            label="Tracking Number"
            component={Input}
            validate={[required, nonEmpty]}
          />
          <Field
            name="issueSelectorr"
            element="select"
            label="What is your issue?"
            component={Input}
            validate={[required, nonEmpty]}
          />
          <Field
            name="details"
            label="Give more details (optional)"
            element="textarea"
            component={Input}
            validate={[required, nonEmpty]}
          />
          <button 
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'complaint',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('complaint', Object.keys(errors)[0]))
})(ComplaintForm);
