import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SignUpContainer } from './sign-up-form.styles';
import { signUpStart } from '../../store/user/user.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handelChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handelSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert('password do not match');
      return;
    }
    dispatch(signUpStart(email, password, displayName));

    resetFormFields();
  };

  return (
    <SignUpContainer>
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: 'text',
            onChange: handelChange,
            name: 'displayName',
            id: 'display-name',
            value: displayName,
            required: true,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            onChange: handelChange,
            name: 'email',
            id: 'email',
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
            id: 'password',
            value: password,
            required: true,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: 'password',
            onChange: handelChange,
            name: 'confirmPassword',
            id: 'confirm-password',
            value: confirmPassword,
            required: true,
          }}
        />

        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
