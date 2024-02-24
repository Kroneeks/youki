import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getVocabularyData,
    getVocabularyError,
    getVocabularyIsLoading,
} from '../../model/selectors/getVocabularyByKeyword/getVocabularyByKeyword';
import { memo, useEffect } from 'react';
import YouTube from 'react-youtube';
import { fetchVocabularyByKeyword } from '../../model/services/fetchVocabularyByKeyword/fetchVocabularyByKeyword';

import { CATEGORY_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface VocabularyDetailsProps {
    className?: string;
    keyword?: string;
    category?: string;
}

const VocubularyData = () => {
    const vocabulary = useSelector(getVocabularyData);

    return (
        <>
            <YouTube
                key={vocabulary?.[0]?.id.videoId ?? ''}
                videoId={vocabulary?.[0]?.id.videoId ?? ''}
            />
        </>
    );
};
// {vocabulary?.map((item) => (
// <YouTube key={item.id.videoId} videoId={item.id.videoId} />
// ))}

const VocabularyDetails = memo((props: VocabularyDetailsProps) => {
    const { className, keyword, category } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getVocabularyIsLoading);
    const error = useSelector(getVocabularyError);
    const categoryValue = sessionStorage.getItem(CATEGORY_LOCALSTORAGE_KEY);

    useEffect(() => {
        void dispatch(
            fetchVocabularyByKeyword(
                `${category}/${keyword?.replace(/_/g, ' ')}`,
            ),
        );
    }, [categoryValue, keyword, category, dispatch]);

    let content;

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (error) {
        content = (
            <div>
                <p>Произошла ошибка</p>
            </div>
        );
    } else {
        content = <VocubularyData />;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div>{content}</div>;
});

VocabularyDetails.displayName = 'VocabularyDetails';

export { VocabularyDetails };
