// import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

let renderCount = 0;

const FormikForm = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        favorite: '',
        checked: [],
        picked: '',
        terms: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string()
          .min(2, 'Must be longer than 2 characters')
          .max(20, 'Nice try, nobody has a last name that long')
          .required('Required'),
        terms: Yup.bool().oneOf([true], "You should accept terms and conditions"),
      })}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field name="firstName" placeholder="Name" />
        <ErrorMessage name="firstName" component="p" />

        <Field name="lastName" placeholder="Last Name" />
        <ErrorMessage name="lastName" component="p" />

        <Field
          id="email"
          name="email"
          placeholder="email@acme.com"
          type="email"
        />
        <ErrorMessage name="email" component="p" />

        <label>
          <Field type="checkbox" name="toggle" />
          <span style={{ marginLeft: 3 }}>Toggle</span>
        </label>

        <div id="checkbox-group">Checkbox Group </div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="checked" value="One" />
            One
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Two" />
            Two
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Three" />
            Three
          </label>
        </div>
        <div id="my-radio-group">Picked</div>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name="picked" value="One" />
            One
          </label>
          <label>
            <Field type="radio" name="picked" value="Two" />
            Two
          </label>
        </div>
        <div className="form-group">
          <div className="checkbox">
            <Field type="checkbox" name="terms" />
            <label htmlFor="terms">I accept Terms And Conditions</label>
          </div>
          <ErrorMessage name="terms" />
        </div>
        <button type="submit">Submit</button>
        <div id="renderCounter">{renderCount++}</div>
      </Form>
    </Formik>
  </div>
);

export default FormikForm;