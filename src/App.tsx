import React from 'react';

import { Stack } from 'stackflow';

// hello

function App() {
  return (
    <React.Suspense fallback={null}>
      <Stack />
    </React.Suspense>
  );
}

export default App;
