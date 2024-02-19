import React from 'react';
import { RouteObject } from 'react-router-dom';
import { LayoutComponent, OnboardingComponent } from 'components';
import { PATH } from 'data';

const protectedApp: RouteObject = {
  element: <LayoutComponent.Protected />,
  children: [
    {
      children: [
        {
          path: PATH.login,
          element: <OnboardingComponent.Login />,
        },
      ],
    },
  ],
};

export { protectedApp };
