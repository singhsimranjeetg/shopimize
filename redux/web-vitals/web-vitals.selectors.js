import { createSelector } from "reselect"



export const selectVitals = state => state.vitals

export const selectWebVitals = createSelector(
  [selectVitals],
  webVitalsArray => webVitalsArray.webVitals
)