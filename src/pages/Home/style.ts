import { CSSObject, Theme } from '@emotion/react';
import { f } from 'styles';

const wrapper = [f.posAbsFull, f.flexColumn, f.rootLineHeight];

const left = ({
  typography: {
    size: { paragraph1 },
    weight: { semibold },
  },
}: Theme): CSSObject => ({
  fontSize: paragraph1,
  fontWeight: semibold,
  marginLeft: '8px',
});

const right: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '24px 24px',
  gap: '16px',
  marginRight: '8px',
};

const scrollable: CSSObject[] = [
  f.flex1,
  f.overflowScroll,
  {
    paddingTop: '56px',
    paddingBottom: '64px',
  },
];

export { wrapper, left, right, scrollable };