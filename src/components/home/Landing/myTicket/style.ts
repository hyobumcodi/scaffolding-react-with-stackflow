import { CSSObject, Theme } from '@emotion/react';
import { f } from 'styles';

const wrap = [
  f.fullWidth,
  f.flexColumn,
  {
    paddingTop: '32px',
    paddingBottom: '24px',
    backgroundColor: '#ffffff',
  },
];

const headSection = [
  f.sideGutter,
  f.flex1,
  f.fullWidth,
  f.flexAlignCenter,
  ({
    typography: {
      size: { paragraph2 },
      weight: { medium },
    },
  }: Theme) => ({
    justifyContent: 'space-between',
    marginBottom: '16px',
    gap: '12px',

    '& button': {
      height: '28px',
      padding: '0 10px',
      display: 'flex',
      alignItems: 'center',
      justfyContent: 'center',
      color: '#949DB2',
      fontSize: paragraph2,
      fontWeight: medium,
      lineHeight: '20px',
      letterSpacing: '-0.2px',
    },
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
    span: {
      color: '#363E52',
      fontSize: heading5,
      fontWeight: bold,
      lineHeight: '28px',
      letterSpacing: '-0.4px',
      marginLeft: '6px',

      b: {
        color: '#7C5BFF',
        marginLeft: '4px',
      },
    },
  }),
];

const tickets_wrap = [
  f.fullWidth,
  f.flexColumn,
  ({
    color: {
      primary: { blue300 },
    },
  }: Theme): CSSObject => ({
    padding: '24px',
    backgroundColor: blue300,
  }),
];

const info_wrap = [
  f.flexAlignCenter,
  ({
    color: {
      gray: { gray0 },
    },
    typography: {
      size: { paragraph1, element3 },
      weight: { semibold },
    },
  }: Theme): CSSObject => ({
    marginBottom: '20px',

    '& div': {
      marginRight: '8px',
    },

    '& span': {
      color: gray0,
      fontSize: paragraph1,
      fontWeight: semibold,
      lineHeight: '24px',
      letterSpacing: '-0.4px',
      marginRight: '8px',
    },

    '& p': {
      color: '#63FFAB',
      fontSize: element3,
      fontWeight: semibold,
      height: '24px',
      padding: '0 10px',
      border: '1px solid rgba(255, 255, 255, 0.30)',
      borderRadius: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '14px',
      letterSpacing: '-0.2px',
    },
  }),
];

const card_wrap = [
  f.fullWidth,
  f.flexColumn,
  ({
    color: {
      gray: { gray0 },
    },
  }: Theme): CSSObject => ({
    justifyContent: 'space-between',
    padding: '16px 20px',
    backgroundColor: gray0,
    borderRadius: '8px',
    boxShadow: '1px 2px 10px 0px rgba(47, 51, 65, 0.03)',
  }),
];

const times = [
  f.flexAlignCenter,
  ({
    color: {
      primary: { blue300 },
    },
    typography: {
      size: { paragraph2 },
      weight: { semibold },
    },
  }: Theme): CSSObject => ({
    marginBottom: '8px',

    '& span': {
      color: blue300,
      fontSize: paragraph2,
      fontWeight: semibold,
      lineHeight: '20px',
      letterSpacing: '-0.2px',
      marginRight: '6px',
    },
  }),
];

const lesson_name = [
  f.flexColumn,
  ({
    typography: {
      size: { paragraph1, paragraph2 },
      weight: { medium, semibold },
    },
  }: Theme): CSSObject => ({
    marginBottom: '12px',

    '& span:first-of-type': {
      color: '#202020',
      fontSize: paragraph1,
      fontWeight: semibold,
      lineHeight: '24px',
      letterSpacing: '-0.4px',
    },

    '& > div > span': {
      color: '#404040',
      fontSize: paragraph2,
      fontWeight: medium,
      lineHeight: '20px',
      letterSpacing: '-0.2px',
      marginRight: '6px',
    },
  }),
];

const package_info = [
  f.flexAlignCenter,
  ({
    typography: {
      size: { paragraph2 },
      weight: { regular },
    },
  }: Theme): CSSObject => ({
    '& span': {
      color: '#727B8E',
      fontSize: paragraph2,
      fontWeight: regular,
      lineHeight: '20px',
      letterSpacing: '-0.2px',
    },
  }),
];

const btn = [
  f.flexAlignCenter,
  ({
    typography: {
      size: { element2 },
      weight: { semibold },
    },
  }: Theme) => ({
    justifyContent: 'center',

    height: '34px',
    flexShrink: 0,
    color: '#727B8E',
    fontSize: element2,
    fontWeight: semibold,
    lineHeight: '20px',
    letterSpacing: '-0.2px',
    padding: '0 12px',
    borderRadius: '6px',
    border: '1px solid #EAEAEA',
  }),
];

export { wrap, headSection, title, tickets_wrap, info_wrap, card_wrap, times, lesson_name, package_info, btn };
