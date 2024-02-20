import React from 'react';
import { ActivityComponentType } from '@stackflow/react';

import { Layout } from 'components/layout';
import { wrapper, scrollable } from './style';

const Alarm: ActivityComponentType = () => {
  return (
    <Layout
      appBar={{
        title: '알림',
      }}
    >
      <div css={wrapper}>
        <div css={scrollable}>Hello this is Alarm Screen</div>
      </div>
    </Layout>
  );
};

export default Alarm;
