import React, { useCallback } from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { UiComponent } from 'components';
import { KeyOf } from 'types/utility-types/KeyOf';
import { TypeActivities } from 'stackflow';
import withDefaultAppBar from './withDefaultAppBar';

type PropOf<T> = T extends React.ComponentType<infer U> ? U : never;

interface LayoutProps {
  activeTab?: KeyOf<TypeActivities>;
  appBar?: PropOf<typeof AppScreen>['appBar'];
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeTab, appBar, children }) => {
  const { replace, render } = withDefaultAppBar();
  const navigatorReplace = useCallback((tab: KeyOf<TypeActivities>) => replace(tab, {}, { animate: false }), []);

  return (
    <AppScreen appBar={appBar || render}>
      {children}
      {activeTab && <UiComponent.NavBar activeTab={activeTab} replace={navigatorReplace} />}
    </AppScreen>
  );
};

export default Layout;
