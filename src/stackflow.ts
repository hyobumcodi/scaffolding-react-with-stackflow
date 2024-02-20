import { stackflow } from '@stackflow/react';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { createLinkComponent } from '@stackflow/link';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';

import { BPay, Home, Reservation, Community, Schedule } from 'pages';
import { HomeComponent, SharedComponent } from 'components';
import { PATH } from 'data';

export const { Stack, activities, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Home,
    Alarm: SharedComponent.Alarm,
    MyTicket: SharedComponent.MyTicket,
    PurchaseTicket: HomeComponent.PurchaseTicket,
    RegisterCenter: HomeComponent.RegisterCenter,
    BPay,
    Reservation,
    Community,
    Schedule,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
      appBar: {
        height: '58px',
      },
    }),
    historySyncPlugin({
      routes: {
        Home: PATH.home,
        Alarm: PATH.alarm,
        MyTicket: PATH.myTicket,
        RegisterCenter: PATH.registerCenter,
        BPay: PATH.bpay,
        Reservation: PATH.reservation,
        Community: PATH.community,
        Schedule: PATH.schedule,
      },
      fallbackActivity: () => 'Home',
    }),
  ],
});

export type TypeActivities = typeof activities;

export const { Link } = createLinkComponent<TypeActivities>();

// useFlow => 'push', 'replace', 'pop'

// useStepFlow => 'stepPush', 'stepReplace', 'stepPop'
// 여러개의 스텝이 푸시된 상태에서 useFlow().pop()을 활용하면 액티비티 내부에 쌓여져있는 모든 스텝들이 한번에 없어져요.

// 각각의 탭의 렌더링은 react-router-dom 담당,
// 탭 내부의 flow는 stackflow 담당.
