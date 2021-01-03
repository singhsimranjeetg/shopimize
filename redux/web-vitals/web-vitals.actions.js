import { webVitalsActionTypes } from "./web-vitals.types";


export const setVitals = (vitals) => ({
  type: webVitalsActionTypes.SET_WEB_VITALS,
  payload: vitals
});