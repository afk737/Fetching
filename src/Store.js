import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './slices/ProductSlice'


export const store = configureStore({
  
  reducer:{
    users:usersReducer
  }

})


