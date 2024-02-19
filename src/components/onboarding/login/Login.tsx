import React from 'react';
import { UiComponent } from 'components';
import { theme } from 'styles';

const Login = () => {
  return (
    <main css={{ padding: '20px' }}>
      <h1>this is login page</h1>
      <UiComponent.Divider color={theme.color.gray.gray400} css={{ margin: '10px auto' }} />
    </main>
  );
};

export default Login;
