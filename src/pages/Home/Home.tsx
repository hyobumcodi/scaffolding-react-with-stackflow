import React from 'react';
import { ActivityComponentType } from '@stackflow/react';

import { HomeComponent, UiComponent } from 'components';
import { useAppSelector } from 'stores';
import { Layout } from 'components/layout';
import { wrapper, scrollable } from './style';

const Home: ActivityComponentType = () => {
  const { auth } = useAppSelector((state) => state.auth);

  return (
    <Layout activeTab={'Home'}>
      <div css={wrapper}>
        <div css={scrollable}>
          {auth?.token.accessToken ? <HomeComponent.Dashboard /> : <HomeComponent.Landing />}
          <UiComponent.Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
