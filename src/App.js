import './App.css';
import ContactForm from './ContactForm';
import Form from './Form'
import FormikForm from './FormikForm'
import SignupForm from './SignupForm'

function App() {
  return (
    <div className="App">
      <p>Vesnica Divotica</p>
      <Form/>
      <br/><br/>
      <ContactForm/>
      <br/><br/>
      <FormikForm/>
      <br/><br/>
      <SignupForm/>
      <br/><br/>
    </div>
  );
}


export default App;
