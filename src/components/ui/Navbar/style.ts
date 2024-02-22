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

const itemWrap =
  (isActive: boolean) =>
  ({
    color: {
      gray: { gray350 },
      primary: { blue300 },
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

    '& > button': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px',
      width: '60px',
      textDecoration: 'none',
      fontWeight: semibold,
      color: isActive ? blue300 : 'inherit',
      transition: 'color 0.4s',

      '& > div > svg': {
        '& > path, & > rect': {
          fill: isActive ? blue300 : gray350,
        },
      },

      '&:focus': {
        color: blue300,
        boxShadow: 'none',
      },
      '& span': {
        marginTop: '4px',
      },
      '& div': {
        margin: '1px auto',
      },
    },
  });

export { wrap, shadowWrap, content, itemWrap };

// css={css`
// & > svg > path {
//   fill: ${activeTab === href ? 'red' : 'green'};
//   stroke: ${activeTab === href ? 'red' : 'green'};
// }

// & > svg > rect {
//   fill: ${activeTab === href ? 'red' : 'green'};
//   stroke: ${activeTab === href ? 'red' : 'green'};
// }
// `}
