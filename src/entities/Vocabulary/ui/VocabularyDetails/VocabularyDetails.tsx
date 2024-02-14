import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getVocabularyData,
    getVocabularyError,
    getVocabularyIsLoading,
} from '../../model/selectors/getVocabularyByKeyword/getVocabularyByKeyword';
import { memo, useEffect } from 'react';
import { fetchVocabularyByKeyword } from '../../model/services/fetchVocabularyByKeyword/fetchVocabularyByKeyword';
import YouTube from 'react-youtube';

interface VocabularyDetailsProps {
    className?: string;
    keyword?: string;
}

const VocubularyData = () => {
    const vocabulary = useSelector(getVocabularyData);
    return (
        <>
            {vocabulary?.map((item) => (
                <YouTube key={item.id} videoId={item.id} />
            ))}
        </>
    );
};

const VocabularyDetails = memo((props: VocabularyDetailsProps) => {
    const { className, keyword } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getVocabularyIsLoading);
    const error = useSelector(getVocabularyError);

    useEffect(() => {
        void dispatch(fetchVocabularyByKeyword(keyword));
    }, [dispatch, keyword]);

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
