import React from 'react';
import { RouteObject } from 'react-router-dom';
import { LayoutComponent } from 'components';

const protectedApp: RouteObject = {
  element: <LayoutComponent.Protected />,
  children: [
    {
      children: [],
    },
  ],
};

export { protectedApp };
