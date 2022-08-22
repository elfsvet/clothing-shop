import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const SignUpForm = () => {
  const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formFields, setFormFields] = useState(defaultFormField);

  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const handleChange = (e) => {
    // deconstruct e.target with its value and name fields
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    const { email, password, displayName } = event.target;
    createAuthUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <label>Email</label>
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <label>Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
