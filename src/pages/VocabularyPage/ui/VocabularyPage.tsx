import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { vocabularyReducer } from '@/entities/Vocabulary/model/slice/vocabularySlice';
import { VocabularyDetails } from '@/entities/Vocabulary/ui/VocabularyDetails/VocabularyDetails';
import { VocabularySearch } from '@/entities/Vocabulary/ui/VocabularySearch/VocabularySearch';
import { Page } from '@/widgets/Page';
import cls from './VocabularyPage.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Toolbar } from '@/widgets/Toolbar';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    vocabulary: vocabularyReducer,
};

const VocabularyPage = ({ className = '' }: ArticleDetailsPageProps) => {
    const { category, id } = useParams<{ category: string; id: string }>();

    if (!id || !category) {
        return null;
    }

    // const articleRatingCard = toggleFeatures({
    // name: 'isArticleRatingEnabled',
    // on: () => <ArticleRating articleId={id} />,
    // off: () => <Card>{t('Оценка статей скоро появится')}</Card>,
    // });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <MainLayout
                className={cls.VocabularyPageLayout}
                toolbar={<Toolbar />}
                content={
                    <Page className={cls.VocabularyPage}>
                        <VStack gap="32" align="stretch">
                            <VocabularySearch
                                defaultValue={id?.replace(/_/g, ' ')}
                            />
                            <VocabularyDetails
                                keyword={id?.replace(/_/g, ' ')}
                                category={category}
                            />
                        </VStack>
                    </Page>
                }
                sidebar={<Sidebar />}
            />
        </DynamicModuleLoader>
    );
};

export default VocabularyPage;
