import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type VocabularySchema, type Vocabulary } from '../types/vocabulary';
import { fetchVocabularyByKeyword } from '../services/fetchVocabularyByKeyword/fetchVocabularyByKeyword';

const initialState: VocabularySchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const vocabularySlice = createSlice({
    name: 'vocabulary',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchVocabularyByKeyword.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchVocabularyByKeyword.fulfilled,
            (state, action: PayloadAction<Vocabulary[]>) => {
                state.isLoading = false;
                state.data = [...action.payload];
            },
        );
        builder.addCase(fetchVocabularyByKeyword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: vocabularyActions } = vocabularySlice;
export const { reducer: vocabularyReducer } = vocabularySlice;
