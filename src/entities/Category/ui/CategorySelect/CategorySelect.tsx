import { RadioGroup } from '@/shared/ui/RadioGroup';
import { memo, useEffect } from 'react';
import { useCategoryActions } from '../../model/slice/categorySlice';

const CategorySelect = memo(() => {
    const { setCategory } = useCategoryActions();
    const categories = ['Education', 'Entertainment', 'Fashion', 'News'];

    const mapCategoriesToId: Record<string, string> = {
        Education: '27',
        Entertainment: '25',
        Fashion: '23',
        News: '21',
    };

    useEffect(() => {
        setCategory(mapCategoriesToId.Education);
    });

    const onChangeCategory = (value: string) => {
        setCategory(mapCategoriesToId[value]);
    };

    return <RadioGroup items={categories} onChange={onChangeCategory} />;
});

CategorySelect.displayName = 'CategorySelect';

export { CategorySelect };
