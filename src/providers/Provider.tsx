import React, { PropsWithChildren } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { theme, global } from 'styles';
import QueryProvider from './QueryProvider';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <QueryProvider>{children}</QueryProvider>
      </ThemeProvider>
    </>
  );
}

export default AppProvider;
