import { createStore, applyMiddleware, compose } from "redux"
//import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./root-reducer"
import logger from "redux-logger"

const middleware = [logger]

const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore)

//const store = createStore(rootReducer)
//export default store;