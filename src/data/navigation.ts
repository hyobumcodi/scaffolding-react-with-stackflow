import { PATH } from 'data';

import LightHome from 'static/icons/navbar/menu_home.svg';
import LightReservation from 'static/icons/navbar/menu_reservation.svg';
import LightBPay from 'static/icons/navbar/menu_bpay.svg';
import LightCommunity from 'static/icons/navbar/menu_community.svg';
import LightSchedule from 'static/icons/navbar/menu_schedule.svg';

import LightHomeFocus from 'static/icons/navbar/menu_home_focus.svg';
import LightReservationFocus from 'static/icons/navbar/menu_reservation_focus.svg';
import LightBPayFocus from 'static/icons/navbar/menu_bpay_focus.svg';
import LightCommunityFocus from 'static/icons/navbar/menu_community_focus.svg';
import LightScheduleFocus from 'static/icons/navbar/menu_schedule_focus.svg';

const BOTTOM_NAVBAR_LIST = [
  {
    href: PATH.home,
    icons: {
      default: LightHome,
      active: LightHomeFocus,
    },
    label: '홈',
  },
  {
    href: PATH.sales,
    icons: {
      default: LightReservation,
      active: LightReservationFocus,
    },
    label: '예약',
  },
  {
    href: PATH.store,
    icons: {
      default: LightBPay,
      active: LightBPayFocus,
    },
    label: '비페이',
  },
  {
    href: PATH.setting,
    icons: {
      default: LightCommunity,
      active: LightCommunityFocus,
    },
    label: '커뮤니티',
  },
  {
    href: PATH.schedule,
    icons: {
      default: LightSchedule,
      active: LightScheduleFocus,
    },
    label: '스케줄',
  },
];

export { BOTTOM_NAVBAR_LIST };
