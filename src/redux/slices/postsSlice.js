import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (currentPage, { dispatch }) => {
        const page = String(currentPage);
        try {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
            );
            dispatch(setPosts(data));
        } catch (error) {
            console.log(error);
        }
    }
);

const initialState = {
    items: [],
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.items = action.payload;
        },
    },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
