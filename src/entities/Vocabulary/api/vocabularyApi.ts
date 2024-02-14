import { rtkApi } from '@/shared/api/rtkApi';
import { type Vocabulary } from '../model/types/vocabulary';

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getVocabularyByKeyword: build.query<Vocabulary, string>({
            query: (keyword) => ({
                url: `/youtube/mainstream/education/${keyword}`,
                method: 'GET',
            }),
        }),
    }),
});

export const getUserDataByIdQuery =
    userApi.endpoints.getVocabularyByKeyword.initiate;
