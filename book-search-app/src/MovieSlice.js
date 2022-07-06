import { createSlice } from '@reduxjs/toolkit'



export const data = createSlice({
    name: 'data',
    initialState: {
        myMovie:[]
    },

    reducers: {
        AddMovie: (state, item) => {
            state.myMovie=item
        }
    }
})

export const { AddMovie } = data.actions
export default data.reducer