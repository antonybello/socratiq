import { SELECT_PANE } from '../constants/AppConstants';

export function selectPane(pane) {
  return {
    type: SELECT_PANE,
    pane: pane
  };
}
