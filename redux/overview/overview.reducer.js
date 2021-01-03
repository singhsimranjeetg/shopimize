import { overviewActionTypes } from "./overview.types";



const INITIAL_STATE = {
  name: 'Shopimize Solutions Inc.',

}
const overviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case overviewActionTypes.SET_SHOP_NAME:
      return {
        ...state,
        name: action.payload
      };

    default:
      return { ...state };

  }
}

export default overviewReducer;