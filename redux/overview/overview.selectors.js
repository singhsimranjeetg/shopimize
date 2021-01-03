import { createSelector } from "reselect"



export const selectOverview = state => state.overview

export const selectAppName = createSelector(
  [selectOverview],
  overview => overview.name
)