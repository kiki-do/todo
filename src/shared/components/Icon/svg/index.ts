import { ReactComponent as trash} from './trash.svg';
import { ReactComponent as edit} from './edit.svg';
import { ReactComponent as done} from './done.svg';

export const ICONS = {
  trash,
  edit,
  done,
} as const;

export type IconNames = keyof typeof ICONS;