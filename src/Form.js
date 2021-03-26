// https://www.vhudyma-blog.eu/better-form-handling-with-formik-in-react/

import { useState } from "react";

//  For a simple form, like this one, which contains only 5 fields, we would need to keep 10 state entries (5 for storing values, 5 for validation).
const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState(false);
  
  const [fullNameError, setFullNameError] = useState("")

  const handleFullNameChange = (e) => {
      const { value } = e.target;

      setFullName(value);

      if (!value) {
        setFullNameError("Full name is required")
      }

      if (/\d/.test(value)) {
          setFullNameError("Full namer should not contain numbers");
      }

      if (value.length > 50) {
          setFullNameError("Are you really sure that your full name is that big?")
      }
  };


  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            // we store the value of inputs in the local state of a React component, which means that inputs are controlled
            value={fullName}
            // onChange={(e) => setFullName(e.target.value)}
            onChange={handleFullNameChange}
          />
          {fullNameError}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <div className="checkbox">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              value={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label htmlFor="terms">I accept Terms And Conditions</label>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;