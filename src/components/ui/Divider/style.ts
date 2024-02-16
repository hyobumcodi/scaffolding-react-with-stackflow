import { CSSObject } from '@emotion/react';
import { DividerOrientationType, DividerVariantType, DividerThicknessType } from 'types';

const borderStyle = (
  orientation?: DividerOrientationType,
  variant?: DividerVariantType,
  thickness?: DividerThicknessType,
  size?: React.CSSProperties['width'],
  color?: string,
): CSSObject => ({
  borderColor: color,
  borderStyle: variant,
  ...(orientation === 'horizontal'
    ? {
        width: size,
        borderWidth: `0 0 ${thickness === 'thin' ? 1 : 10}px 0`,
      }
    : {
        height: size,
        borderWidth: `0 0 0 ${thickness === 'thin' ? 1 : 10}px`,
      }),
});

export { borderStyle };
