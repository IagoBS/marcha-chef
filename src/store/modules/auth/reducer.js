import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  singed: false,
  loading: false,
};
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SINGIN_REQUEST':
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case '@auth/SINGIN_SUCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.singed = true;
        draft.loading = false;
      });
    case '@auth/SIGN_FAIL':
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.token = null;
        draft.singed = false;
      });
    default:
      return state;
  }
}
