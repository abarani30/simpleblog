import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    loading: false,
    registered: false,
    success: null,
    error: null,
    user: null
}


// register a new user
export const register = createAsyncThunk('users/register', async(data, thunkAPI) => {
    try {
        const body = JSON.stringify(data)
        const res = await fetch('/api/v1/users/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        })

        const jsonData = await res.json()

        if (res.status === 201) return jsonData
        else return thunkAPI.rejectWithValue(jsonData)
    }

    catch(err) {
        return thunkAPI.rejectWithValue(err.response.jsonData)
    }
})

// login the user
export const login = createAsyncThunk('users/login', async(data, thunkAPI) => {
    
    const { dispatch, rejectWithValue } = thunkAPI

    try {
        const body = JSON.stringify(data)
        const res = await fetch('/api/v1/users/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        })

        const jsonData = await res.json()

        if (res.status === 200) {
            await dispatch(getUser())
            return jsonData
        }
        else return rejectWithValue(jsonData)
    }

    catch(err) {
        return rejectWithValue(err.response.jsonData)
    }
})

// logout the user
export const logout = createAsyncThunk('users/logout', async(_, thunkAPI) => {
    
    const { rejectWithValue } = thunkAPI

    try {
        const res = await fetch('/api/v1/users/logout', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const jsonData = await res.json()

        if (res.status === 200) return jsonData
        else return rejectWithValue(jsonData)
    }

    catch(err) {
        return rejectWithValue(err.response.jsonData)
    }
})

// get the user profile data
export const getUser = createAsyncThunk('users/getUser', async(_, thunkAPI) => {
    
    const { rejectWithValue } = thunkAPI

    try {
        const res = await fetch('/api/v1/users/me', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        })

        const jsonData = await res.json()

        if (res.status === 200) return jsonData
        else return rejectWithValue(jsonData)
    }

    catch(err) {
        return rejectWithValue(err.response.jsonData)
    }
})

// check if user is already authenticated
export const checkAuth = createAsyncThunk('users/checkAuth', async(_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI
    try {
        const res = await fetch("/api/v1/users/verify", {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        })

        const data = res.json()
        if (res.status === 200) {
            await dispatch(getUser())
            return data
        }
        else return rejectWithValue(data.error)
    }

    catch(err){
        return rejectWithValue(err.response.data)
    }
})


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetRegister: state => {
            state.registered = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, state => {
            state.loading = false
            state.registered = false
            state.success = null
            state.error = null
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = true
            state.registered = true
            state.success = action.payload.success
            state.error = null
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.registered = false
            state.success = null
            state.error = action.payload.error
        })
        builder.addCase(login.pending, state => {
            state.isAuthenticated = false
            state.loading = false
            state.registered = true
            state.success = null
            state.error = null
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.loading = true
            state.registered = true
            state.success = action.payload.success
            state.error = null
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isAuthenticated = false
            state.loading = false
            state.registered = true
            state.success = null
            state.error = action.payload.error
        })
        builder.addCase(logout.pending, state => {
            state.isAuthenticated = false
            state.loading = false
            state.registered = true
            state.success = null
            state.error = null
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isAuthenticated = false
            state.loading = false
            state.registered = true
            state.success = action.payload.success
            state.error = null
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.isAuthenticated = false
            state.loading = false
            state.registered = true
            state.success = null
            state.error = null
        })
        builder.addCase(getUser.pending, state => {
            return state
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.loading = false
            state.registered = true
            state.success = true
            state.error = null
            state.user = action.payload.user
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.isAuthenticated = false
            state.loading = false
            state.registered = true
            state.success = null
            state.error = "Unable to get the user!"
            state.user  = null
        })
        builder.addCase(checkAuth.pending, state => {
            return state
        })
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.success = action.payload.success
        })
        builder.addCase(checkAuth.rejected, (state, action) => {
            state.isAuthenticated = false
        })
    }
})

export const { resetRegister } = authSlice.actions

export default authSlice.reducer