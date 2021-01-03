import { overviewActionTypes } from "./overview.types";


export const setInfo = (name) => dispatch => dispatch({
  type: overviewActionTypes.SET_SHOP_NAME,
  payload: name
});