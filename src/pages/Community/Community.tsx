import React from 'react';
import { ActivityComponentType } from '@stackflow/react';

import { Layout } from 'components/layout';
import { wrapper, scrollable } from './style';
import { CommunityComponent } from 'components';

const Community: ActivityComponentType = () => {
  return (
    <Layout activeTab={'Community'}>
      <div css={wrapper}>
        <div css={scrollable}>
          <CommunityComponent.CommunityMain />
        </div>
      </div>
    </Layout>
  );
};

export default Community;
