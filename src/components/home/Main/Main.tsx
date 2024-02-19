import React from 'react';

import { useCheckSignin } from 'hooks';
import { UiComponent } from 'components';
import { theme } from 'styles';

function Main() {
  const { isLoading } = useCheckSignin();

  return (
    <>
      <main css={{ padding: '100px 20px' }}>
        this is main page before user loggedin
        <UiComponent.Divider color={theme.color.gray.gray400} css={{ margin: '0 auto', marginTop: '10px' }} />
      </main>
      {isLoading && <UiComponent.Loading />}
    </>
  );
}

export default Main;
