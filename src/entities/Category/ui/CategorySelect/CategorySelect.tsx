import { RadioGroup } from '@/shared/ui/RadioGroup';
import { memo, useEffect } from 'react';
import { useCategoryActions } from '../../model/slice/categorySlice';
import { Category } from '../../model/types/category';
import { CATEGORY_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

const getActiveCategory = () => {
    return sessionStorage.getItem(CATEGORY_LOCALSTORAGE_KEY);
};

const setActiveCategory = (category: Category) => {
    sessionStorage.setItem(CATEGORY_LOCALSTORAGE_KEY, category);
};

const CategorySelect = memo(() => {
    const { setCategory } = useCategoryActions();
    const categories: Category[] = [
        Category.Education,
        Category.Entertainment,
        Category.Blogs,
        Category.Science,
        Category.News,
    ];

    useEffect(() => {
        if (!getActiveCategory()) {
            setCategory(Category.Education);
            setActiveCategory(Category.Education);
        }
    }, [setCategory]);

    const onChangeCategory = (value: string) => {
        setCategory(value);
        setActiveCategory(value as Category);
    };

    return (
        <RadioGroup
            items={categories}
            onChange={onChangeCategory}
            active={getActiveCategory() ?? undefined}
        />
    );
});

CategorySelect.displayName = 'CategorySelect';

export { CategorySelect };
