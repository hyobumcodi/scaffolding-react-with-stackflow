import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from 'routes';

function App() {
  return (
    <React.Suspense fallback={null}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;
