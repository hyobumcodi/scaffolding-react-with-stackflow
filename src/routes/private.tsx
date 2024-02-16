import React from 'react';
import { RouteObject } from 'react-router-dom';
import { LayoutComponent } from 'components';

const privateApp: RouteObject = {
  element: <LayoutComponent.Private />,
  children: [
    {
      children: [],
    },
  ],
};

export { privateApp };
