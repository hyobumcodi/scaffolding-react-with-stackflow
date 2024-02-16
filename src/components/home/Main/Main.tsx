import React from 'react';

import { useCheckSignin } from 'hooks';
import { UiComponent } from 'components';

function Main() {
  const { isLoading } = useCheckSignin();

  return (
    <>
      <main css={{ padding: '100px' }}>
        this is main page before user loggedin
        <UiComponent.Divider
          thickness="bold"
          variant="dashed"
          color="#E7EAF2"
          css={{ margin: '0 auto', marginTop: '10px' }}
        />
      </main>
      {isLoading && <UiComponent.Loading />}
    </>
  );
}

export default Main;
