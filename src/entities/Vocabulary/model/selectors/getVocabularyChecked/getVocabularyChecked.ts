import { type StateSchema } from '@/app/providers/StoreProvider';

export const getVocabularyChecked = (state: StateSchema) =>
    state.vocabulary?.checked;
