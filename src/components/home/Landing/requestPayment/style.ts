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
    backgoundColor: gray0,
  }),
];

const title = [
  f.flexAlignCenter,
  ({
    color: {
      text: { text0, text25 },
    },
    typography: {
      size: { heading2 },
      weight: { bold },
    },
  }: Theme): CSSObject => ({
    fontSize: heading2,
    fontWeight: bold,
    lineHeight: '32px',
    color: text0,
    marginBottom: '12px',

    b: {
      color: text25,
      marginLeft: '6px',
    },
  }),
];

const card_wrap = [
  f.fullWidth,
  f.flexColumn,
  ({ shadows }: Theme): CSSObject => ({
    padding: '24px',
    border: '1px solid #EAEAEA',
    borderRadius: '8px',
    boxShadow: shadows[3],
  }),
];

const info_wrap = [
  f.fullWidth,
  f.flexColumn,
  f.flexAlignCenter,
  {
    marginBottom: '20px',
  },
];

const payment_info = [
  f.fullWidth,
  f.flexAlignCenter,
  ({
    color: {
      text: { text1, text75 },
      error: { red400 },
    },
    typography: {
      size: { element2, heading5 },
      weight: { medium, bold },
    },
  }: Theme): CSSObject => ({
    position: 'relative',
    height: '48px',
    marginBottom: '12px',

    '& img': {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      marginRight: '10px',
      overflow: 'hidden',
    },

    '& div': {
      display: 'flex',
      flexDirection: 'column',

      '& span:first-of-type': {
        color: text1,
        fontSize: element2,
        fontWeight: medium,
        lineHeight: '18px',
        letterSpacing: '-0.2px',
      },

      '& span:last-of-type': {
        color: '#3A3C53',
        fontSize: heading5,
        fontWeight: bold,
        lineHeight: '28px',
        letterSpacing: '-0.4px',
      },
    },

    '& p': {
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',

      fontSize: element2,
      fontWeight: bold,
      lineHeight: '18px',
      letterSpacing: '-0.2px',

      height: '26px',
      color: red400,
      backgroundColor: 'rgba(255, 84, 108, 0.10)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10px',
      borderRadius: '6px',
    },
  }),
];

const resson_info = [
  f.fullWidth,
  f.flexAlignCenter,
  ({
    color: {
      gray: { gray0 },
    },
    typography: {
      size: { paragraph1 },
      weight: { semibold },
    },
  }: Theme): CSSObject => ({
    marginTop: '12px',
    color: '#4c5874',
    backgroundColor: gray0,
    fontSize: paragraph1,
    fontWeight: semibold,
    lineHeight: '24px',
    letterSpacing: '-0.4px',
  }),
];

const bpay = [
  f.fullWidth,
  f.flexAlignCenter,
  f.flexJustifyCenter,
  ({
    color: {
      primary: { blue300 },
      gray: { gray0 },
    },
    typography: {
      size: { paragraph1 },
      weight: { bold },
    },
  }: Theme): CSSObject => ({
    height: '48px',
    borderRadius: '8px',
    color: gray0,
    backgroundColor: blue300,

    fontSize: paragraph1,
    fontWeight: bold,
    lineHeight: '24px',
    letterSpacing: '-0.4px',

    span: {
      marginLeft: '10px',
    },
  }),
];

export { wrap, title, card_wrap, info_wrap, payment_info, resson_info, bpay };
