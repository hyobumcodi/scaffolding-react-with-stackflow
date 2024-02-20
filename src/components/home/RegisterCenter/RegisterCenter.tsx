import React from 'react';
import { UiComponent } from 'components';
import { theme } from 'styles';
import { Layout } from 'components/layout';
import { wrapper, title, scrollable } from './style';

const RegisterCenter = () => {
  return (
    <Layout
      appBar={{
        title: '센터 등록',
      }}
    >
      <div css={wrapper}>
        <div css={scrollable}>
          <main css={{ padding: '20px' }}>
            <h1 css={title}>this is MyTicket page</h1>
            <UiComponent.Divider color={theme.color.gray.gray400} css={{ margin: '10px auto' }} />
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterCenter;
