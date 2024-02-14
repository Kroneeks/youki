import { type StateSchema } from '@/app/providers/StoreProvider';

export const getVocabularyData = (state: StateSchema) => state.vocabulary?.data;
export const getVocabularyError = (state: StateSchema) =>
    state.vocabulary?.error;
export const getVocabularyIsLoading = (state: StateSchema) =>
    state.vocabulary?.isLoading;
