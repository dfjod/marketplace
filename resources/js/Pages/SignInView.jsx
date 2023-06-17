import {removeErrorBorder, addErrorBorder} from "../Components/Validate";
import {useState} from 'react';

const SignInView = () => {
  const [errorMessage, setErrorMessage] = useState('');


  const handleInvalid = (event) => {
    addErrorBorder(event);

    const validityState = event.target.validity;

    if(validityState.valueMissing) {
      setErrorMessage('Please fill in both fields');
    } else {
      setErrorMessage('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll('input');
    removeErrorBorder(inputs);

    const valid = event.target.checkValidity();

    if(valid) {
      console.log("Submited");
    } else {
      console.log("Form not valid")
    }
  }

  return (
    <div className="signin">
      <header>
        <a href="/" className="button dim-button">Back</a>
      </header>
      <main>
        <form action="#" id="sign-in-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required onInvalid={handleInvalid}/>
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required onInvalid={handleInvalid}/>
          </div>
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
          <div className="form-row-button">
            <button type="submit" className="button bright-button">Sign In</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default SignInView;