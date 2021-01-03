import { webVitalsActionTypes } from "./web-vitals.types";



const INITIAL_STATE = {
  webVitals: []

}
const webVitalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case webVitalsActionTypes.SET_WEB_VITALS:
      return {
        ...state,
        webVitals: action.payload
      };

    default:
      return { ...state };

  }
}

export default webVitalsReducer;