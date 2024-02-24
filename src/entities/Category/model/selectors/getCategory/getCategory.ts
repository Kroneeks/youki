import { CATEGORY_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { buildSelector } from '@/shared/lib/store/buildSelector';

export const [useCategoryValue, getCategoryValue] = buildSelector(
    (state) =>
        state.category.category ||
        sessionStorage.getItem(CATEGORY_LOCALSTORAGE_KEY),
);
