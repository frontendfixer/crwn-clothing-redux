import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { ButtonGroup, SignInContainer } from './sign-in-form.styles'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch()

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const signInWithGoogle = async () => dispatch(googleSignInStart())

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(emailSignInStart(email, password))
    resetFormFields()
  }

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handelSubmit(e)}>
        <FormInput
          label="Email"
          type="email"
          onChange={handelChange}
          name="email"
          value="email"
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handelChange}
          name="password"
          value="password"
          required
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
  )
}

export default SignInForm
