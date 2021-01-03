
import { combineReducers } from "redux"
import overviewReducer from "./overview/overview.reducer"
import webVitalsReducer from './web-vitals/web-vitals.reducer'


const rootReducer = combineReducers({
  overview: overviewReducer,
  vitals: webVitalsReducer
})

export default rootReducer;