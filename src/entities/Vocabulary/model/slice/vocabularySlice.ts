import { type PayloadAction } from '@reduxjs/toolkit';

import { type VocabularySchema, type Vocabulary } from '../types/vocabulary';
import { fetchVocabularyByKeyword } from '../services/fetchVocabularyByKeyword/fetchVocabularyByKeyword';
import { buildSlice } from '@/shared/lib/store/buildSlice';

const initialState: VocabularySchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    checked: 0,
};

export const vocabularySlice = buildSlice({
    name: 'vocabulary',
    initialState,
    reducers: {
        setChecked: (state, { payload }: PayloadAction<number>) => {
            state.checked = payload;
        },
    },
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

export const {
    actions: vocabularyActions,
    reducer: vocabularyReducer,
    useActions: useVocabularyActions,
} = vocabularySlice;
