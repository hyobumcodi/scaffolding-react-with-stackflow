import React from 'react';
import { Outlet } from 'react-router-dom';
import { UiComponent } from 'components';

function Base() {
  const loading = false;

  return (
    <>
      <Outlet />
      {loading && <UiComponent.Loading />}
      <UiComponent.NavBar />
    </>
  );
}

export default Base;
