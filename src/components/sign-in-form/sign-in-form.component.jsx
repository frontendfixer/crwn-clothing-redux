import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SignInContainer, ButtonGroup } from './sign-in-form.styles';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => dispatch(googleSignInStart());

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handelSubmit = async event => {
    event.preventDefault();
    try {
      const { user } = dispatch(emailSignInStart({ email, password }));

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
