import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Home } from 'pages';
import { PATH } from 'data';
import { MyTicket } from 'components/home';

const unauthorizedApp: RouteObject = {
  children: [
    {
      path: PATH.home,
      element: <Home params={{}} />,
    },
    {
      path: PATH.myTicket,
      element: <MyTicket params={{}} />,
    },
  ],
};

export { unauthorizedApp };
