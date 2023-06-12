/* eslint-disable no-console */
/* eslint-disable no-alert */
import { useState } from 'react';

import { SignInContainer, ButtonGroup } from './sign-in-form.styles';
import {
  signInWithGooglePopup,
  signInUserEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => signInWithGooglePopup();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handelSubmit = async event => {
    event.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const { user } = await signInUserEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password');
          break;
        case 'auth/user-not-found':
          alert('No User associated with this email');
          break;
        default:
          console.log({ error });
          break;
      }
    }
  };

  const handelChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            onChange: handelChange,
            name: 'email',
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            onChange: handelChange,
            name: 'password',
            value: password,
            required: true,
          }}
        />
        <ButtonGroup>
          <Button>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonGroup>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
