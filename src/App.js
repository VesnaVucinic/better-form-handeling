import './App.css';
import ContactForm from './ContactForm';
import Form from './Form'
import FormikForm from './FormikForm'

function App() {
  return (
    <div className="App">
      <p>Vesnica Divotica</p>
      <Form/>
      <br/><br/>
      <ContactForm/>
      <br/><br/>
      <FormikForm/>
    </div>
  );
}


export default App;
