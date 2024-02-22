import React from 'react';
import { ActivityComponentType } from '@stackflow/react';

import { HomeComponent } from 'components';
import { useAppSelector } from 'stores';
import { Layout } from 'components/layout';

const Home: ActivityComponentType = () => {
  const { auth } = useAppSelector((state) => state.auth);

  return (
    <Layout activeTab={'Home'}>
      {auth?.token.accessToken ? <HomeComponent.Dashboard /> : <HomeComponent.Landing />}
      {/* <UiComponent.Footer /> */}
    </Layout>
  );
};

export default Home;
