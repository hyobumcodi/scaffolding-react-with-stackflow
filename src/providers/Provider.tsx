import React, { PropsWithChildren } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'stores';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { theme, global } from 'styles';
import QueryProvider from './QueryProvider';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <QueryProvider>{children}</QueryProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default AppProvider;
