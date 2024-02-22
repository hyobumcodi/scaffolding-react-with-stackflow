import { CSSObject } from '@emotion/react';

const layout: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
};

const theme = {
  color: {
    primary: {
      blue0: '#EEF4FF',
      blue100: '#3da4ff',
      blue150: '#4A93FF',
      blue200: '#2F5FDC',
      blue300: '#004FEC',
    },
    error: {
      red200: '#FFEBED',
      red350: '#FDC5C6',
      red400: '#FF546C',
      red600: '#EB4852',
      red850: '#B5262B',
    },
    sub: {
      purple750: '#5F4EE3',
      purple600: '#7E6FF4',
      purple350: '#D7D2FB',
      purple250: '#E9E6FC',
      green750: '#00AA6C',
      green600: '#0FD28A',
      green300: '#A8F3D3',
      green200: '#D8F8EC',
      pink800: '#AE397A',
      pink600: '#E663B3',
      pink300: '#FCD8ED',
      pink150: '#FFEAFA',
    },
    gray: {
      gray0: '#FFFFFF',
      gray50: '#F0F0F0',
      gray100: '#FCFCFC',
      gray150: '#F5F5F5',
      gray200: '#EFEFEF',
      gray250: '#E8E8E8',
      gray300: '#DFDFDF',
      gray350: '#C8C8C8',
      gray400: '#B7B7B7',
      gray500: '#949494',
      gray600: '#777777',
      gray650: '#616161',
      gray700: '#555555',
      gray750: '#3F3F3F',
      gray770: '#383838',
      gray800: '#2A2A2A',
      gray850: '#1F1F1E',
      gray870: '#1A1A1A',
      gray900: '#111111',
      gray1000: '#000000',
    },
    text: {
      text0: '#2B395D',
      text1: '#738DC2',
      text25: '#363E52',
      text50: '#3A3C53',
      text75: '#727B8E',
      text100: '#202020',
    },
  },
  typography: {
    size: {
      heading1: '28px',
      heading2: '24px',
      heading3: '22px',
      heading4: '20px',
      heading5: '18px',
      paragraph1: '16px',
      paragraph2: '14px',
      element1: '15px',
      element2: '13px',
      element3: '12px',
      element4: '11px',
    },
    weight: {
      bold: 700,
      semibold: 600,
      medium: 500,
      regular: 400,
    },
  },
  shadows: {
    1: '0px 3px 16px 0px rgba(0, 0, 0, 0.20)',
    2: '0px -4px 4px rgba(0, 0, 0, 0.025)',
    3: '2px 5px 20px 0px rgba(83, 90, 103, 0.10)',
  },
  grids: {
    layout1: {
      ...layout,
      width: '100%',
    },
    layout2: {
      ...layout,
      width: '84%',
    },
    layout3: {
      ...layout,
      width: '67%',
    },
    layout4: {
      ...layout,
      width: '50%',
    },
  },
  size: {
    gutter: '24px',
    height: {
      header: '58px',
      navbar: '64px',
    },
  },
} as const;

export default theme;
