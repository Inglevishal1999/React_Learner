import { combineReducers, legacy_createStore as createStore } from 'redux';
import TaskReducer from '../src/Component/Task Manger/reducer/TaskReducer';
const rootReducer = combineReducers({
    tasks: TaskReducer
});

const store = createStore(rootReducer);

export default store;
