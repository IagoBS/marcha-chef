import { produce } from 'immer';

const INITIAL_STATE = {
  profile: null,
};
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SINGIN_SUCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.user;
      });
    case '@user/UPDATE_PROFILE_SUCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.profile;
      });
    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.profile = null;
      });
    default:
      return state;
  }
}
