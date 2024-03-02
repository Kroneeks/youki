import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Vocabulary } from '../../types/vocabulary';

export const fetchVocabularyByKeyword = createAsyncThunk<
    Vocabulary[],
    string | undefined,
    ThunkConfig<string>
>('vocabulary/fetchVocabularyByKeyword', async (keyword, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        if (!keyword) {
            throw new Error('');
        }

        const response = await extra.api.get<Vocabulary[]>(
            `/youtube/${keyword}`,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (err) {
        return rejectWithValue('error');
    }
});
