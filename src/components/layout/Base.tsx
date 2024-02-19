import React from 'react';
import { Outlet } from 'react-router-dom';
import { UiComponent } from 'components';

function Base() {
  const loading = false;
  return (
    <>
      <UiComponent.Header />
      <div css={{ marginTop: '58px' }}>
        <Outlet />
      </div>
      {loading && <UiComponent.Loading />}
    </>
  );
}

export default Base;
