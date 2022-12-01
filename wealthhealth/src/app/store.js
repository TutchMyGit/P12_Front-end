import { configureStore } from '@reduxjs/toolkit'
import { employeeSlice } from './slices'

const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer,
    }
})

export default store