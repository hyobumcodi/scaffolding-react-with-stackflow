import { CSSObject, Theme } from '@emotion/react';

const wrap = ({
  color: {
    gray: { gray400 },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '50px 20px 80px 20px',
  padding: '32px 0',
  borderTop: `1px solid ${gray400}`,
});

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
  gap: '0 32px',

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
