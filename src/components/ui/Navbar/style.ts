import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '64px',
  zIndex: 99,
};

const shadowWrap = ({
  color: {
    gray: { gray0 },
  },
  shadows,
}: Theme): CSSObject => ({
  height: '100%',
  margin: 'auto',
  alignItems: 'center',
  maxWidth: '768px',
  backgroundColor: gray0,
  borderRadius: '24px 24px 0 0',
  boxShadow: shadows[2],
});

const content: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
};

const itemWrap = ({
  color: {
    gray: { gray350 },
    primary: { blue100 },
  },
  typography: {
    size: { element2 },
    weight: { semibold },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
  fontSize: element2,
  color: gray350,
  boxShadow: 'none',

  '& > a': {
    padding: '2px',
    width: '60px',
    textDecoration: 'none',
    fontWeight: semibold,
    color: 'inherit',
    transition: 'color 0.4s',
  },
  'a:hover': {
    color: 'inherit',
    boxShadow: 'none',
  },
  'a.focus': {
    color: blue100,
    boxShadow: 'none',
  },
  'a div': {
    marginTop: '4px',
  },
  'a img': {
    margin: '1px auto',
  },
  'a img + img, a.focus img:first-of-type': {
    display: 'none',
  },
  'a.focus img + img': {
    display: 'block',
  },
});

export { wrap, shadowWrap, content, itemWrap };
