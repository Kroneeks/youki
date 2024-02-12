export enum AppRoutes {
    MAIN = 'main',
    VOCABULARY = 'vocabulary',
    NOT_FOUND = 'notfound',
}

export const getRouteMain = () => '/';
export const getRouteVocabulary = (id: string) => `/youtube/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteVocabulary(':id')]: AppRoutes.VOCABULARY,
};
