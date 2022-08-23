import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';
const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);

  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  // on submit event
  const handleSubmit = async (event) => {
    // prevent default action
    event.preventDefault();
    // if password does not match return and alert the user
    if (password !== confirmPassword) {
      alert('Password is not confirmed');
      return;
    }
    // if it matches
    try {
      // create a response variable passing to createAuthUserWithEmailAndPassword 2 arguments email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // if we get the response it will pass it to createUserDocumentFromAuth

      await createUserDocumentFromAuth(user, { displayName });
      // if it succeeds
      resetFormFields();

      // if error
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      }
      // user will face an error
      console.log('user creation encountered an error', error);
    }
  };

  const handleChange = (e) => {
    // deconstruct e.target with its value and name fields
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
