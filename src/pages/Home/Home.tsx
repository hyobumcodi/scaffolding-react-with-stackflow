import React from 'react';
import { ActivityComponentType } from '@stackflow/react';

import { HomeComponent, UiComponent } from 'components';
import { useAppSelector } from 'stores';
import { Layout } from 'components/layout';
import IconBell from 'static/icons/jsx/IconBell';
import IconLogo from 'static/icons/jsx/IconLogo';
import IconDefaultProfile from 'static/icons/jsx/IconDefaultProfile';
import { wrapper, scrollable, left, right } from './style';

const Home: ActivityComponentType = () => {
  const { auth } = useAppSelector((state) => state.auth);

  const appBarLeft = () => (
    <div css={left}>
      <IconLogo />
    </div>
  );

  const appBarRight = () => (
    <div css={right}>
      <IconBell />
      <IconDefaultProfile />
    </div>
  );

  return (
    <Layout
      appBar={{
        renderLeft: appBarLeft,
        renderRight: appBarRight,
      }}
    >
      <div css={wrapper}>
        <div css={scrollable}>
          {auth?.token.accessToken ? <HomeComponent.Dashboard /> : <HomeComponent.Landing params={{}} />}
          <UiComponent.Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
