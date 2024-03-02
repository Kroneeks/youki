import type { PayloadAction } from '@reduxjs/toolkit';
import { type CategorySchema } from '../types/category';
import { buildSlice } from '@/shared/lib/store/buildSlice';

const initialState: CategorySchema = {
    category: '',
};

export const categorySlice = buildSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
    },
});

export const {
    actions: categoryActions,
    reducer: categoryReducer,
    useActions: useCategoryActions,
} = categorySlice;
