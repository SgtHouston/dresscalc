import { createStore, combineReducers } from 'redux'
import { fees } from './reducers/fees'
import { laborhours } from './reducers/laborhours'
import { maintenancefees } from './reducers/maintenancefees'
import { packaging } from './reducers/packaging'
import { results } from './reducers/results'
import { variablematerials } from './reducers/variablematerials'


const rootReducer = combineReducers ({
    fees: fees,
    laborhours: laborhours,
    maintenancefees: maintenancefees,
    packaging: packaging,
    variablematerials: variablematerials,
    results: results
})

// export root reducer, which is all reducers combined
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store