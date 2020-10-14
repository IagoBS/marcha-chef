import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return produce(state, (draft) => {
        const { menu } = action;
        draft.push(menu);
      });
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const menuIndex = draft.findIndex((r) => r.id === action.id);
        if (menuIndex >= 0) {
          draft.splice(menuIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCESS': {
      return produce(state, (draft) => {
        const menuIndex = draft.findIndex((r) => r.id === action.id);
        if (menuIndex >= 0) {
          draft[menuIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
