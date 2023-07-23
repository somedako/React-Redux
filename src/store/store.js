import { configureStore } from '@reduxjs/toolkit';
import posts from '../redux/slices/postsSlice';
import filter from '../redux/slices//filterSlice';

export const store = configureStore({
    reducer: { posts, filter },
});
