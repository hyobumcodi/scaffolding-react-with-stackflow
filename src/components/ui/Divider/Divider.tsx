import * as React from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { DividerOrientationType, DividerVariantType, DividerThicknessType, DividerSizeType } from 'types';
import { theme } from 'styles';
import { borderStyle } from './style';

interface Props extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientationType;
  variant?: DividerVariantType;
  thickness?: DividerThicknessType;
  size?: DividerSizeType;
  color?: string;
  css?: Interpolation<Theme>;
}

function Divider(props: Props) {
  const {
    orientation = 'horizontal',
    variant = 'solid',
    thickness = 'thin',
    size = '100%',
    color = theme.color.gray.gray200,
    css,
  } = props;

  return <hr {...props} css={[borderStyle(orientation, variant, thickness, size, color), css]} />;
}

export default Divider;
