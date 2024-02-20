import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getVocabularyData,
    getVocabularyError,
    getVocabularyIsLoading,
} from '../../model/selectors/getVocabularyByKeyword/getVocabularyByKeyword';
import { memo, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useCategoryValue } from '@/entities/Category/ui/CategorySelect';
import { fetchVocabularyByKeyword } from '../../model/services/fetchVocabularyByKeyword/fetchVocabularyByKeyword';

interface VocabularyDetailsProps {
    className?: string;
    keyword?: string;
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
    const { className, keyword } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getVocabularyIsLoading);
    const error = useSelector(getVocabularyError);
    const categoryValue = useCategoryValue();

    useEffect(() => {
        void dispatch(fetchVocabularyByKeyword(`${categoryValue}/${keyword}`));
    }, [categoryValue, keyword, dispatch]);

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
