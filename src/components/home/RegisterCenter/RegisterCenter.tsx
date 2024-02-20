import React from 'react';
import { UiComponent } from 'components';
import { theme } from 'styles';
import { Layout } from 'components/layout';
import { title } from './style';

const RegisterCenter = () => {
  return (
    <Layout
      appBar={{
        title: '센터 등록',
      }}
    >
      <main css={{ padding: '20px' }}>
        <h1 css={title}>this is 센터 등록 page</h1>
        <UiComponent.Divider color={theme.color.gray.gray400} css={{ margin: '10px auto' }} />
      </main>
    </Layout>
  );
};

export default RegisterCenter;
