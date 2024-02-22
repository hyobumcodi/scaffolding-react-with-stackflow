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
    paddingTop: '8px',
    paddingBottom: '24px',
    backgoundColor: gray0,
  }),
];

const title = ({
  color: {
    text: { text0 },
    primary: { blue300 },
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
  marginBottom: '16px',

  b: {
    display: 'block',
    color: blue300,
  },
});

const btn_wrap = [f.fullWidth, f.flexAlignCenter, { marginBottom: '10px' }];

const registCenter = [
  f.flexColumn,
  f.flexAlignCenter,
  f.flexJustifyCenter,
  ({
    color: {
      text: { text100 },
    },
    typography: {
      size: { element3 },
      weight: { medium },
    },
  }: Theme): CSSObject => ({
    height: '48px',
    marginRight: '10px',
    padding: '0 12px',
    borderRadius: '8px',
    border: '1px solid #F0F0F0',

    color: text100,
    fontSize: element3,
    fontWeight: medium,
    lineHeight: '14px',
    letterSpacing: '-0.2px',

    span: {
      marginTop: '2px',
    },
  }),
];

const mobileTicket = [
  f.flex1,
  f.flexAlignCenter,
  f.flexJustifyCenter,
  ({
    color: {
      primary: { blue300 },
      gray: { gray0 },
    },
    typography: {
      size: { element1 },
      weight: { semibold },
    },
  }: Theme): CSSObject => ({
    height: '48px',
    borderRadius: '8px',
    color: gray0,
    backgroundColor: blue300,

    fontSize: element1,
    fontWeight: semibold,
    lineHeight: '20px',
    letterSpacing: '-0.2px',

    span: {
      marginLeft: '8px',
    },
  }),
];

const banner = [
  f.fullWidth,
  f.flexAlignCenter,
  ({
    color: {
      primary: { blue0 },
    },
  }: Theme): CSSObject => ({
    justifyContent: 'space-between',

    height: '58px',
    padding: '0 20px',
    backgroundColor: blue0,
    borderRadius: '8px',
  }),
];

const bannerTextGroup = ({
  color: {
    primary: { blue200 },
    text: { text50 },
  },
  typography: {
    size: { element2, element3 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  color: text50,
  fontWeight: bold,

  'p:first-of-type': {
    fontSize: element3,
  },

  'p:last-of-type': {
    marginTop: '2px',

    color: blue200,
    fontSize: element2,
  },
});

const bannderIcon = ({
  color: {
    primary: { blue150 },
  },
}: Theme): CSSObject => ({
  '& svg': { width: '16px', height: '16px', transform: 'rotate(180deg)', '& path': { stroke: blue150 } },
});

export { wrap, title, btn_wrap, registCenter, mobileTicket, banner, bannerTextGroup, bannderIcon };
