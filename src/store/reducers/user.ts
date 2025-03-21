import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type UserState = {
    user: User | null
    token: string | null
    isAuthenticated: boolean
}

const initialState: UserState = {
    user: null,
    token: null,
    isAuthenticated: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
        },
    },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
