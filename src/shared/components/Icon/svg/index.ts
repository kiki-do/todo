import { ReactComponent as trash} from './trash.svg';

export const ICONS = {
  trash
} as const;

export type IconNames = keyof typeof ICONS;