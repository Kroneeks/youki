import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { vocabularyReducer } from '@/entities/Vocabulary/model/slice/vocabularySlice';
import { VocabularyDetails } from '@/entities/Vocabulary/ui/VocabularyDetails/VocabularyDetails';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    vocabulary: vocabularyReducer,
};

const VocabularyPage = ({ className = '' }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    // const articleRatingCard = toggleFeatures({
    // name: 'isArticleRatingEnabled',
    // on: () => <ArticleRating articleId={id} />,
    // off: () => <Card>{t('Оценка статей скоро появится')}</Card>,
    // });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VocabularyDetails keyword={id} />
        </DynamicModuleLoader>
    );
};

export default VocabularyPage;
