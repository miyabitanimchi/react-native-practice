import * as React from 'react';
import { useState, useContext } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate;
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in. Please check your credential or try again later!'
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;