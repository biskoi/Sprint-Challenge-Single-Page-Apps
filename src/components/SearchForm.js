import React, { useState } from "react";
import {withFormik, Field, Form} from 'formik';

function SearchForm(props) {
 
  return (
    <section className="search-form">

    <Form>
      <label htmlFor = 'search'>
        Search
        <Field name = 'search' placeholder = 'Enter a search term'/>
      </label>
    </Form>

    </section>
  );

}

const FormikSearch = withFormik({

  mapPropsToValues: props => {

    return {
      search: props.query || ''
    }

  },

  handleSubmit: (values, bag) => {
    console.log(values, bag);
    bag.props.setQuery(values.search);
  }


})(SearchForm);

export default FormikSearch;
