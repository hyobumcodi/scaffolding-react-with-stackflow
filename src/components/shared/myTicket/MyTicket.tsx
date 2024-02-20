import React from 'react';
import { UiComponent } from 'components';
import { theme } from 'styles';
import { Layout } from 'components/layout';
import { title } from './style';
import { ActivityComponentType } from '@stackflow/react';

const MyTicket: ActivityComponentType = () => {
  return (
    <Layout
      appBar={{
        title: '내 이용권',
      }}
    >
      <main css={{ padding: '20px' }}>
        <h1 css={title}>this is MyTicket page</h1>
        <UiComponent.Divider color={theme.color.gray.gray400} css={{ margin: '10px auto' }} />
      </main>
    </Layout>
  );
};

export default MyTicket;
