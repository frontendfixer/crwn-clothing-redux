import AuthenticationContainer from './authentication.styles';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

/* eslint arrow-body-style: ["error", "never"] */
const Authentication = () => (
  <AuthenticationContainer>
    <SignInForm />
    <SignUpForm />
  </AuthenticationContainer>
);

export default Authentication;
