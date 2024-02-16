import { ValueOf } from 'types/utility-types/ValueOf';
import { theme } from 'styles';

type PrimaryColorValuesType = ValueOf<typeof theme.color.primary>;
type ErrorColorValuesType = ValueOf<typeof theme.color.error>;
type SubColorValuesType = ValueOf<typeof theme.color.sub>;
type GrayColorValuesType = ValueOf<typeof theme.color.gray>;

export type ColorValueType = PrimaryColorValuesType | ErrorColorValuesType | SubColorValuesType | GrayColorValuesType;

export type SizeType = 'small' | 'medium' | 'large';

export type DividerOrientationType = 'horizontal' | 'vertical';

export type DividerVariantType = 'solid' | 'dashed';

export type DividerThicknessType = 'thin' | 'bold';

export type DividerSizeType = `${number}%` | `${number}px`;
