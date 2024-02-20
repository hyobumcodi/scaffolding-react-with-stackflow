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

const scrollable = (hasNavbar: boolean) => [
  f.flex1,
  f.overflowScroll,
  ({
    size: {
      height: { header, navbar },
    },
  }: Theme): CSSObject => ({
    paddingTop: header,
    paddingBottom: hasNavbar ? navbar : 0,
  }),
];

export { wrapper, left, right, scrollable };
