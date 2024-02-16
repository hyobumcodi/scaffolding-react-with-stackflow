import * as React from 'react';
import { Interpolation, Theme } from '@emotion/react';
import {
  DividerOrientationType,
  DividerVariantType,
  DividerThicknessType,
  DividerSizeType,
  ColorValueType,
} from 'types';
import { borderStyle } from './style';

interface Props extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientationType;
  variant?: DividerVariantType;
  thickness?: DividerThicknessType;
  size?: DividerSizeType;
  color?: ColorValueType;
  css?: Interpolation<Theme>;
}

function Divider(props: Props) {
  const { orientation = 'horizontal', variant = 'solid', thickness = 'thin', size = '100%', color, css } = props;

  return <hr {...props} css={[borderStyle(orientation, variant, thickness, size, color), css]} />;
}

export default Divider;
