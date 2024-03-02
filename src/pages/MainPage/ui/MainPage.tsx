import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { useState } from 'react';
import { Page } from '@/widgets/Page';
import cls from './MainPage.module.scss';
import { VocabularySearch } from '@/entities/Vocabulary/ui/VocabularySearch/VocabularySearch';
import { useCategoryToUrl } from '@/entities/Category/model/selectors/getCategory/getCategoryToUrl';

const MainPage = () => {
    const [header, setHeader] = useState('Follow your dreams');
    const category = useCategoryToUrl();

    return (
        <>
            <StickyContentLayout
                content={
                    <Page className={cls.MainPage}>
                        <VStack gap="64" align="stretch">
                            <AppLink
                                to={`/youtube/${category}/${header.replace(/ /g, '_')?.toLowerCase()}`}
                                className={cls.header}
                            >
                                <h3>{header}</h3>
                            </AppLink>
                            <VocabularySearch />
                        </VStack>
                    </Page>
                }
            />
        </>
    );
};

export default MainPage;
