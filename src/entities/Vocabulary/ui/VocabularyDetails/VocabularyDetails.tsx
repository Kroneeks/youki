import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getVocabularyData,
    getVocabularyError,
    getVocabularyIsLoading,
} from '../../model/selectors/getVocabularyByKeyword/getVocabularyByKeyword';
import { memo, useEffect } from 'react';
import { fetchVocabularyByKeyword } from '../../model/services/fetchVocabularyByKeyword/fetchVocabularyByKeyword';

import { CATEGORY_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import cls from './VocabularyDetails.module.scss';

interface VocabularyDetailsProps {
    className?: string;
    keyword?: string;
    category?: string;
}

const VocubularyData = () => {
    const vocabulary = useSelector(getVocabularyData);

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <VStack align="center" className={cls.youtubeWrapper}>
            <iframe
                src={`https://www.youtube.com/embed/${vocabulary?.[0]?.id.videoId ?? ''}`}
                allowFullScreen
                className={cls.video}
            ></iframe>
        </VStack>
    );
};
// <YouTube
// key={vocabulary?.[0]?.id.videoId ?? ''}
// videoId={vocabulary?.[0]?.id.videoId ?? ''}
// opts={opts}
// />

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
        content = (
            <VStack align="center" className={cls.youtubeWrapper}>
                <Skeleton width="100%" height="100%" className={cls.video} />
            </VStack>
        );
    } else if (error) {
        content = (
            <div>
                <p>Произошла ошибка</p>
            </div>
        );
    } else {
        content = <VocubularyData />;
    }

    return <div>{content}</div>;
});

VocabularyDetails.displayName = 'VocabularyDetails';

export { VocabularyDetails };
