import { useCategoryValue } from './getCategory';

export const useCategoryToUrl = () => {
    const category = useCategoryValue();
    return category?.replace(/ /g, '_').replace(/&/g, 'and');
};
