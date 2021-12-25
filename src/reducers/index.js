import { combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';

import { persistReducer } from "redux-persist";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import AsyncStorage from '@react-native-async-storage/async-storage' ;

const persistConfig = {
    key: "root",
    storage : AsyncStorage,
    stateReconciler : hardSet

  };


  const rootReducer = combineReducers({

    form : formReducer
  })

  export default persistReducer(persistConfig, rootReducer)