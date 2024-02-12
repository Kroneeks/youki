import { AppRouteProps } from '@/shared/types/router';
import {
    AppRoutes,
    getRouteMain,
    getRouteVocabulary,
} from '@/shared/const/router';
import { NotFoundPage } from '@/pages/NotFoundPage';
import VocabularyPage from '@/pages/VocabularyPage/VocabularyPage';
import { MainPage } from '@/pages/MainPage';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.VOCABULARY]: {
        path: getRouteVocabulary(':id'),
        element: <VocabularyPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
