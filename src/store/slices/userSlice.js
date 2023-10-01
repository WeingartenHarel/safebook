import { createSlice } from '@reduxjs/toolkit';
import { userService } from '../../services/userService';

export const getUser = () => async (dispatch) => {
    try {
        const result = await userService.query()
        dispatch(setUser(result));
    } catch (error) {
        console.error('Error fetching user:', error);
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload
        },
        filterUsers: (state, action) => {
            let usersCopy  = JSON.parse(JSON.stringify(state.users))
            const filteredUsers = usersCopy.filter(item =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.users = filteredUsers

        },
    }

})

export const { setUser, filterUsers } = userSlice.actions
export default userSlice.reducer