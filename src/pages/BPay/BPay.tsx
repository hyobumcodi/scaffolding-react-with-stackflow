import React from 'react';
import { ActivityComponentType } from '@stackflow/react';

import { Layout } from 'components/layout';
import { wrapper, scrollable } from './style';
import { BPayComponent } from 'components';

const BPay: ActivityComponentType = () => {
  return (
    <Layout activeTab={'BPay'}>
      <div css={wrapper}>
        <div css={scrollable}>
          <BPayComponent.BPayMain />
        </div>
      </div>
    </Layout>
  );
};

export default BPay;
