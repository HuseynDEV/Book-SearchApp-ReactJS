import { configureStore } from '@reduxjs/toolkit'
import data from './CounterSlice'
import myMovie from './MovieSlice'


export default configureStore({
    reducer: {
        data:data,
        movie:myMovie
    }
})