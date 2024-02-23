import { CSSObject, Theme } from '@emotion/react';
import { f } from 'styles';

const wrap = [
  f.sideGutter,
  f.fullWidth,
  f.flexColumn,
  ({
    color: {
      gray: { gray0 },
    },
  }: Theme) => ({
    paddingTop: '16px',
    paddingBottom: '24px',
    backgroundColor: gray0,
  }),
];

const title = [
  f.flexAlignCenter,
  ({
    typography: {
      size: { heading5 },
      weight: { bold },
    },
  }: Theme): CSSObject => ({
    marginBottom: '12px',

    b: {
      color: '#363E52',
      fontSize: heading5,
      fontWeight: bold,
      lineHeight: '28px',
      letterSpacing: '-0.4px',
      marginLeft: '6px',
    },
  }),
];

const card_wrap = [
  f.fullWidth,
  f.flexAlignCenter,
  ({ shadows }: Theme): CSSObject => ({
    padding: '16px',
    border: '1px solid #EAEAEA',
    borderRadius: '8px',
    boxShadow: shadows[3],

    '& img': {
      width: '118px',
      height: '118px',
      borderRadius: '8px',
      marginRight: '12px',
    },
  }),
];

const info_wrap = [
  f.flex1,
  f.flexColumn,
  {
    padding: '6px 0',
  },
];

const package_badge = [
  f.flexAlignCenter,
  ({
    typography: {
      size: { element4 },
      weight: { regular },
    },
  }: Theme): CSSObject => ({
    marginBottom: '6px',

    '& svg': {
      marginRight: '4px',
    },

    '& p': {
      color: '#4C5874',
      fontSize: element4,
      fontWeight: regular,
      lineHeight: '14px',
      letterSpacing: '-0.2px',
    },
  }),
];

const package_name = ({
  typography: {
    size: { paragraph1 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  marginBottom: '24px',

  color: '#202020',
  fontSize: paragraph1,
  fontWeight: medium,
  lineHeight: '20px',
  letterSpacing: '-0.4px',
});

const package_price = [
  f.flexAlignCenter,
  ({
    typography: {
      size: { paragraph1, element2 },
      weight: { semibold, bold },
    },
  }: Theme): CSSObject => ({
    '& span:first-of-type': {
      marginRight: '4px',

      color: '#004FEC',
      fontSize: paragraph1,
      fontWeight: bold,
      lineHeight: '24x',
      letterSpacing: '-0.2px',
    },

    '& span:last-of-type': {
      color: '#949DB2',
      fontSize: element2,
      fontWeight: semibold,
      lineHeight: '21px',
      letterSpacing: '-0.2px',
      textDecorationLine: 'line-through',
    },
  }),
];

export { wrap, title, card_wrap, info_wrap, package_badge, package_name, package_price };
