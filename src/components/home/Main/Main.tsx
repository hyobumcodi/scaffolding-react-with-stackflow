import React from 'react';

import { useCheckSignin } from 'hooks';
import { UiComponent } from 'components';

function Main() {
  const { isLoading } = useCheckSignin();

  return (
    <>
      <main css={{ padding: '100px' }}>this is main page before user loggedin</main>
      {isLoading && <UiComponent.Loading />}
    </>
  );
}

export default Main;
