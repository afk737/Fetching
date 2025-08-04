import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchUser = createAsyncThunk('',
    async () => {
        const result = await axios.get('https://dummyjson.com/users')
        return result.data.users
    }
)

const slice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        (builder).addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false
                state.error.action.payload
            })
    }
})

export default slice.reducer
