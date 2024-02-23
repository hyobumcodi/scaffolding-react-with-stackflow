import { CSSObject } from '@emotion/react';

const layout: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
};

const theme = {
  color: {
    white: '#ffffff',
    black: '#202020',
    blue: '#004FEC',
    orange: '',
    red: '#FF4848',
    pink: '#FF59A4',
    green: '#15B295',
    purple: '#7C5BFF',
    error: '',
    linear: '',
    background: '',
    line: {
      line10: '',
      line20: '',
    },
    bluegray: {
      bluegray20: '',
      bluegray30: '',
      bluegray40: '#949DB2',
      bluegray50: '#727B8E',
      bluegray80: '#4C5874',
      bluegray90: '#363E52',
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
