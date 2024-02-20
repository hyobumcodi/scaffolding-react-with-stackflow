import React from 'react';
import { ActivityComponentType } from '@stackflow/react';

import { Layout } from 'components/layout';
import { wrapper, scrollable } from './style';
import { ScheduleComponent } from 'components';

const Schedule: ActivityComponentType = () => {
  return (
    <Layout activeTab={'Schedule'}>
      <div css={wrapper}>
        <div css={scrollable}>
          <ScheduleComponent.ScheduleMain />
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
