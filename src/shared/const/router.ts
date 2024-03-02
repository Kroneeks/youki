export enum AppRoutes {
    MAIN = 'main',
    VOCABULARY = 'vocabulary',
    NOT_FOUND = 'notfound',
}

export const getRouteMain = () => '/';
export const getRouteVocabulary = (category: string, id: string) =>
    `/youtube/${category}/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteVocabulary(':category', ':id')]: AppRoutes.VOCABULARY,
};
