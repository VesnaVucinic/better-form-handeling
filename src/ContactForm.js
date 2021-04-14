import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

// components, like Formik, Form, Field, ErrorMessage use React Context, to connect to the Formik state and method

const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(50, "Are you really sure that your full name is that big?")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(50, "Are you really sure that your email is that big?"),
  terms: Yup.bool().oneOf([true], "You should accept terms and conditions"),
});

const ContactForm = () => (
  <div className="App">
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        message: "",
        terms: false,
      }}
      
      validationSchema={validationSchema}
      onSubmit={async values => {
        console.log(values);
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="fullName">Full name:</label>
          <Field type="text" name="fullName" />
          <ErrorMessage name="fullName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field type="text" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <Field as="textarea" name="message" />
        </div>
        <div className="form-group">
          <div className="checkbox">
            <Field type="checkbox" name="terms" />
            <label htmlFor="terms">I accept Terms And Conditions</label>
          </div>
          <ErrorMessage name="terms" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default ContactForm;