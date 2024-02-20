import { buildSelector } from '@/shared/lib/store/buildSelector';

export const [useCategoryValue, getCategoryValue] = buildSelector(
    (state) => state.category.category,
);
