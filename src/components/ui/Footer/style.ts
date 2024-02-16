import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '51px 226px 80px 100px',
};

const linkWrap = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    weight: { bold },
    size: { element2 },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0 155px',
  '> a': {
    color: gray1000,
    cursor: 'pointer',
    fontWeight: bold,
    fontSize: element2,
    ':hover': {
      textDecoration: 'underline',
    },
  },
});

export { wrap, linkWrap };
