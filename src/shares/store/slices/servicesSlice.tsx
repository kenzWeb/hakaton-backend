import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {Service} from '../../types/types'
import { services } from '../../../data/services'

interface ServicesState {
	items: Service[]
	loading: boolean
	error: string | null
}

const initialState: ServicesState = {
	items: services,
	loading: false,
	error: null,
}

const servicesSlice = createSlice({
	name: 'services',
	initialState,
	reducers: {
		setServices: (state, action: PayloadAction<Service[]>) => {
			state.items = action.payload
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload
		},
	},
})

export const {setServices, setLoading, setError} = servicesSlice.actions
export default servicesSlice.reducer
