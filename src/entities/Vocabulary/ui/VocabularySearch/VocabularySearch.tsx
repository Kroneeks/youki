import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import SearchIcon from '@/shared/assets/icons/search.svg';
import cls from './VocabularySearch.module.scss';
import { memo, useState } from 'react';
import { CategorySelect } from '@/entities/Category/ui/CategorySelect';
import { useCategoryToUrl } from '@/entities/Category/model/selectors/getCategory/getCategoryToUrl';

interface VocabularySearchProps {
    defaultValue?: string;
}

const VocabularySearch = memo((props: VocabularySearchProps) => {
    const { defaultValue } = props;
    const category = useCategoryToUrl();
    const [value, setValue] = useState(defaultValue ?? '');
    const onChange = (keyword: string) => {
        setValue(keyword);
    };

    return (
        <VStack gap="16" align="stretch">
            <HStack gap="16">
                <Input value={value} onChange={onChange} size="m" />
                <AppLink
                    to={`/youtube/${category}/${value.replace(/ /g, '_')}`}
                    className={cls.searchLink}
                >
                    <Button
                        className={cls.searchBtn}
                        radius="smRadius"
                        variant="filled"
                    >
                        <Icon
                            Svg={SearchIcon}
                            width="20px"
                            height="20px"
                            variant="inverted"
                        />
                    </Button>
                </AppLink>
            </HStack>
            <CategorySelect />
        </VStack>
    );
});

VocabularySearch.displayName = 'VocabularySearch';

export { VocabularySearch };
