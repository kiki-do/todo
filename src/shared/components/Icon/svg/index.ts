import { ReactComponent as trash} from './trash.svg';
import { ReactComponent as edit} from './edit.svg';
import { ReactComponent as done} from './done.svg';
import { ReactComponent as remove} from './remove.svg';

export const ICONS = {
  trash,
  edit,
  done,
  remove,
} as const;

export type IconNames = keyof typeof ICONS;