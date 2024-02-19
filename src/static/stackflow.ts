import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { theme } from 'styles';

const stackflowOptions = {
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
      backgroundColor: theme.color.gray.gray0,
      appBar: {
        height: '56px',
        backButton: {
          ariaLabel: '뒤로 가기',
        },
        closeButton: {
          ariaLabel: '닫기',
        },
      },
    }),
  ],
};

export { stackflowOptions };
