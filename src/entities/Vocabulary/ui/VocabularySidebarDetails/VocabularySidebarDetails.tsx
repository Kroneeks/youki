import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getVocabularyData } from '../../model/selectors/getVocabularyByKeyword/getVocabularyByKeyword';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './VocabularySidebarDetails.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useVocabularyActions } from '../../model/slice/vocabularySlice';
import { getVocabularyChecked } from '../../model/selectors/getVocabularyChecked/getVocabularyChecked';

const VocabularySidebarDetails = memo(() => {
    const vocabulary = useSelector(getVocabularyData);
    const { setChecked } = useVocabularyActions();
    const checked = useSelector(getVocabularyChecked);

    const onCheck = (newValue: number) => {
        setChecked(newValue);
    };

    return (
        <VStack gap="16">
            {vocabulary?.map((item, index) => (
                <HStack
                    gap="16"
                    key={item?.id?.videoId}
                    className={classNames(
                        cls.details,
                        { [cls.checked]: checked === index },
                        [],
                    )}
                    onClick={() => {
                        onCheck(index);
                    }}
                >
                    <div>
                        <div className={cls.marker}>{index + 1}</div>
                    </div>
                    <div className={cls.label}>{item?.snippet?.title}</div>
                </HStack>
            ))}
        </VStack>
    );
});

VocabularySidebarDetails.displayName = 'VocabularySidebarDetails';

export { VocabularySidebarDetails };
