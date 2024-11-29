import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import servicesReducer from './slices/servicesSlice'

export const store = configureStore({
	reducer: {
		services: servicesReducer,
		filter: filterReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
