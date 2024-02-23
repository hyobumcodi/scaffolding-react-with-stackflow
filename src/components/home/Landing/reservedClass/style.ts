import { CSSObject, Theme } from '@emotion/react';
import { f } from 'styles';

const wrap = [
  f.sideGutter,
  f.fullWidth,
  f.flexColumn,
  {
    paddingTop: '32px',
    paddingBottom: '24px',
    backgroundColor: '#F3F7FF',
  },
];

const headSection = [
  f.flex1,
  f.fullWidth,
  f.flexAlignCenter,
  ({
    typography: {
      size: { paragraph2 },
      weight: { medium },
    },
  }: Theme): CSSObject => ({
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
    color: {
      primary: { blue300 },
    },
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
        color: blue300,
        marginLeft: '4px',
      },
    },
  }),
];

const ul = [
  f.flexColumn,
  {
    gap: '16px',
  },
];

const card_wrap = [
  f.fullWidth,
  f.flexAlignCenter,
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

const info_wrap = [f.flexColumn];

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

export { wrap, headSection, title, ul, card_wrap, info_wrap, times, lesson_name, package_info, btn };
