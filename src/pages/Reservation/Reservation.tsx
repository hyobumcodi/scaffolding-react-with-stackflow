import React from 'react';
import { ActivityComponentType } from '@stackflow/react';

import { Layout } from 'components/layout';
import { wrapper, scrollable } from './style';
import { ReservationComponent } from 'components';

const Reservation: ActivityComponentType = () => {
  return (
    <Layout activeTab={'Reservation'}>
      <div css={wrapper}>
        <div css={scrollable}>
          <ReservationComponent.ReservationMain />
        </div>
      </div>
    </Layout>
  );
};

export default Reservation;
